const mongoose = require('mongoose');
const { Review } = require('./Review')

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const getReviewsForId = (id, cb) => {
  Review.findOne({ _id: id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  });
};

module.exports.getReviewsForId = getReviewsForId;
module.exports.database = db;
