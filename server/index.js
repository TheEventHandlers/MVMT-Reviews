const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3004;

app.use(morgan('tiny'));
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log('Listening on port 3004...');
});
