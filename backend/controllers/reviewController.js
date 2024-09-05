const express = require("express");
const Review = require("../models/Review")
const { z } = require("zod");

// zod validation schema
// const trainerSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   qualifications: z.string().optional(),
//   specialties: z.array(z.string()).optional(),
//   availability: z.array(z.string()).min(1),
//   email: z.string().min(1),
//   phone: z.string().min(1),
//   address: z.string().min(1),
//   password: z.string().min(1)
// });

// controller to create trainer
const writeReview = async (req, res) => {
  try {
    const review = new Review(req.body);
  await review.save();
  res.status(201).send(review);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};
// controller to fetch review
const getReview = async (req, res) => {
  try {
    const reviews = await Review.find();
  res.status(200).send(reviews);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

module.exports ={
  getReview,
  writeReview
}
