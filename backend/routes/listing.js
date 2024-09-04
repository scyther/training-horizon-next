const express = require("express");
const jwt=require("jsonwebtoken");
const zod = require("zod");
const JWT_SECRET=require("../config/jwt")
const {Listing} = require('../models/Listing')
const {trainerAuthMiddleware } = require("../middleware/authMiddleware");
// const { default: mongoose } = require("mongoose");

const listingRouter = express.Router();

const getListingSchema = zod.object({
  trainerId: zod.string(),
  category: zod.string(),
  title: zod.string(),
  price: zod.string(),
  mode: zod.string().optional(),
  location: zod.string(),
  quantity: zod.string().optional(),
  startDate: zod.string(),
  endDate: zod.string(),
  days: zod.string(),
  gender: zod.string(),
  startTime: zod.string().optional(),
  endTime: zod.string().optional(),
  ageGroup: zod.string(),
  description: zod.string(),
});
const postListingSchema = zod.object({
  category: zod.string(),
  title: zod.string(),
  price: zod.string(),
  mode: zod.string().optional(),
  location: zod.string(),
  quantity: zod.string().optional(),
  startDate: zod.string(),
  endDate: zod.string(),
  days: zod.string(),
  gender: zod.string(),
  startTime: zod.string(),
  endTime: zod.string(),
  ageGroup: zod.string(),
  description: zod.string(),
});

// listingRouter.get("/listing", authMiddleware, async function (req, res) {
//   const listing = await Listing.findOne({
//     userId: res.userId,
//   });
//   res.status(200).json({
//     balance: listing.balance,
//   });
// });
//can be used in listing filtering
listingRouter.get("/listing", async function (req, res) {
  const filter = req.query.filter || "";
  const listing = await Listing.find();

  res.status(200).json({listings: listing});

});

listingRouter.get("/listing/:listingId", async function (req, res) {
  // Extract the listingId from the route parameter
  const { listingId } = req.params;

  try {
    // Fetch the listing from the database using the listingId
    const listing = await Listing.findById(listingId);

    // Check if the listing exists
    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    // Return the found listing
    res.status(200).json({
      message: "Listing retrieved successfully",
      listing,
    });
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({
      message: "Error fetching listing",
      error,
    });
  }
});



listingRouter.post("/add-listing",trainerAuthMiddleware,async function (req, res) {
    const inputFromTrainer = {
      trainerId: res.trainerId,
      category: req.body.category,
      title: req.body.title,
      price: req.body.price,
      mode: req.body.mode,
      location: req.body.location,
      quantity: req.body.quantity,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      days: req.body.days,
      gender: req.body.gender,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      ageGroup: req.body.ageGroup,
      description: req.body.description,
    };
    const result = getListingSchema.safeParse(inputFromTrainer);

    if (!result.success) {
      return res.status(411).json({
        message: "Incorrect inputs",
        result,
      });
    }
    try {
      const isUniqueTitle = await Listing.findOne({
        title: inputFromTrainer.title,
      });
      if (isUniqueTitle) {
        return res.status(411).json({
          message: "Similar Title Found! ",
        });
      }

      const listing = await Listing.create(inputFromTrainer);
      const token = jwt.sign(
        {
          listingId: listing._id,
        },
        JWT_SECRET
      );
      res.status(200).json({
        message: "list created successfully",
        token: token,
        listingId: listing._id
      });
    } catch (error) {
      res.status(411).json({
        message: " Incorrect listing input",
        error,
      });
    }
  }
);

module.exports = listingRouter;
