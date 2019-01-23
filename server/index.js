require('newrelic');
const express = require('express');
//const morgan = require('morgan');
const compression = require('compression');
const { getReviewsForId } = require('../database/index.js');

const app = express();
const PORT = 3004;

//app.use(morgan('tiny'));
app.use(compression());
app.use('/watches/:wid', express.static('client/dist'));

// CREATE
app.post('/api/watches/:wid/reviews', (req, res) =>) {
  var newreview_id;
  addReview(newreview_id, (err) => {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.send(`Successfully added new review ${newreview_id}`);
    }
  })
}

// READ
app.get('/api/watches/:wid/reviews', (req, res) => {
  const watch_id = req.params.wid;
  getReviewsForId(watch_id, (reviewsForId) => {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.send(reviewsForId);
    }
  });
});

// UPDATE
app.patch('/api/watches/:wid/reviews/:_id', (req, res) => {
  const review_id = req.params._id;
  editReview(review_id, (err) => {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.send(`Successfully updated review ${review_id}`);
    }
  })
})

// DELETE
app.delete('/api/watches/:wid/reviews/:_id', (req, res) => {
  const review_id = req.params._id;
  deleteReview(review_id, (err) => {
    if (err) {
      res.status(404);
      res.send(err);
    } else {
      res.send(`Successfully deleted review ${review_id}`);
    }
  })
})

app.listen(PORT, () => {
  console.log('Listening on port 3004...');
});
