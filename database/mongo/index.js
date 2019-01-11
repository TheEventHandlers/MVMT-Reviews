const mongoose = require('mongoose');
const { Review } = require('./schema_mongo.js')

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// CREATE
const addReview = (id, cb) => {
  var doc = {};
  doc._id = id;
  doc.w_id = null;
  doc.reviewer = null;
  doc.stars = null;
  doc.date_posted = null;
  doc.review_id = null;
  doc.review_header = null;
  doc.review_body = null;
  doc.upvotes = null;
  doc.downvotes = null;
  Review.insertOne(doc, (err, document) => {
    if (err) { throw err }
    cb();
  })
}

// READ
const getReviewsForId = (watch_id, cb) => {
  Review.find({ 'w_id': watch_id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  }).limit(10);
};

// UPDATE
const editReview = (review_id, update, cb) => {
  Review.updateOne(
    { '_id': review_id }, // Filter
    { 'review_body': update }, // Update
    (err, document) => {
      if (err) { throw err; }
      cb(document);
  })
}

// DELETE
const deleteReview = (review_id, cb) => {
  Review.deleteOne({_id: review_id}, (err, document) => {
    if (err) { throw err; }
    cb(document);
  })
}
 
module.exports.addReview = addReview;
module.exports.getReviewsForId = getReviewsForId;
module.exports.editReview = editReview;
module.exports.deleteReview = deleteReview;
module.exports.database = db;
