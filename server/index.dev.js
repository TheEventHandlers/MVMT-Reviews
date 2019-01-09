const express = require('express');
const morgan = require('morgan');
<<<<<<< HEAD
//const compression = require('compression');
=======
const compression = require('compression');
>>>>>>> 819e5febc4cb85ecf26844e5d7713fdcd622678c
const { getReviewsForId } = require('../database/index.dev.js');

const app = express();
const PORT = 3004;

app.use(morgan('tiny'));
<<<<<<< HEAD
//app.use(compression());
=======
app.use(compression());
>>>>>>> 819e5febc4cb85ecf26844e5d7713fdcd622678c
app.use('/watches/:wid', express.static('client/dist'));

app.get('/api/watches/:wid/reviews', (req, res) => {
  const id = req.params.wid;
  getReviewsForId(id, (reviewsForId) => {
    res.send(reviewsForId);
  });
});

app.listen(PORT, () => {
  console.log('Listening on port 3004...');
});