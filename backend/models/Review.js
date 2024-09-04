const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: String,
  review: String,
  rating: Number,
  date: { type: Date, default: Date.now },
});

 const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;