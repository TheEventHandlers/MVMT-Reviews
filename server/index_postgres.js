require('newrelic');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const { getReviewsById } = require('../database/postgres/index.js');

const app = express();
const PORT = 3004;

app.use(morgan('tiny'));
app.use(compression());


app.use('/watches/:wid', express.static('client/dist/'));

app.get('/api/watches/:wid/reviews', (req, res) => {
  const id = req.params.wid;
  getReviewsById(id, (reviewsForId) => {
    res.send(reviewsForId);
  });
});

app.listen(PORT, () => {
  console.log('Listening on port 3004...');
});