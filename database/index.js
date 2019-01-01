const mongoose = require('mongoose');
const { Review } = require('./Review_schema.js')

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const getReviewsForId = (id, cb) => {
  Review.find({ w_id: id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  }).limit(4);
};

module.exports.getReviewsForId = getReviewsForId;
module.exports.database = db;
