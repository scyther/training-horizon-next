const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  trainerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    // maxLength:30,
  },
  price: {
    type: String,
  },
  mode: {
    type: String,
  },
  location:{
    type: String
  },
  quantity: {
    type: String,
    // required:true,
  },
  startDate: {
    type: String,
    // required:true,
  },
  endDate: {
    type: String,
  },
  days: {
    type: String,
    required: true,
    // minLength:1,
  },
  gender: {
    type: String,
    required: true,
    // maxLength:10,
    trim: true,
  },
  startTime: {
    type: String,
    // required:true,
  },
  endTime: {
    type: String,
    // required:true,
  },
  ageGroup: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    // minLength:10,
  },
  isApproved: { type: Boolean, default: false },
});

const Listing = mongoose.model("Listings", listingSchema);

module.exports = {
  Listing,
};
