const { Pool, Client } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);

pool.on('error', (err) => {
  console.log('Error', err);
})

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack)
  } else {
    console.log('connected to postgres');
  }
})


// ----- Database Functions ----- //

// CREATE

// READ
const getReviewsById = (w_id, callback) => {
  const queryString = `select * from reviews where w_id = ${w_id}`;
  pool.query(queryString, (err, results) => {
    if (err) {
      callback(error);
    } else {
      const data = results.rows;
      console.log(data);
      console.log("got reviews by id")
      callback(data);
    }
  });
};

// UPDATE

// DELETE
const deleteReview = (w_id, callback) => {
  const queryString = `delete from photos where id = ${w_id}`;
  pool.query(queryString, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = {
  // addReview,
  getReviewsById,
  // editReview,
  deleteReview
}
