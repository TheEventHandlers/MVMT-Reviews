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
      callback(err);
    } else {
      const data = {
        _id: results.rows[0]._id,
        w_id: results.rows[0].w_id,
        reviewer: results.rows[0].reviewer,
        stars: results.rows[0].stars,
        date_posted: results.rows[0].date_posted,
        review_header: results.rows[0].review_header,
        review_body: results.rows[0].review_body,
        upvotes: results.rows[0].upvotes
        downvotes: results.rows[0].downvotes
      };
      callback(null, data);
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
