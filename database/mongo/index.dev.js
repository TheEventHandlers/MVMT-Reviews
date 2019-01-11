const mongoose = require('mongoose');
const { Review } = require('./schema_mongo.js')

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true })
  .then(() => {
  })
  .catch(err => { // mongoose connection error will be handled here
      console.error('App starting error:', err.stack);
      process.exit(1);
   });

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const getReviewsForId = (id, cb) => {
  Review.find({ w_id: id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  });
};

module.exports.getReviewsForId = getReviewsForId;
module.exports.database = db;
