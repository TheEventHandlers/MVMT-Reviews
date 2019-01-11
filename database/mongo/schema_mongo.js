const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: Number,
  w_id: Number,
  reviewer: String, 
  stars: Number,
  date_posted: Date,
  review_id: Number,
  review_header: String,  
  review_body: String,
  upvotes: Number,
  downvotes: Number,
});

const Review = mongoose.model('Review', reviewSchema); 

module.exports.Review = Review;
