const { Pool, Client } = require('pg');
// const { Review } = require('./schema_postgres.js')

// mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true })
//   .then(() => {
//   })
//   .catch(err => { // mongoose connection error will be handled here
//       console.error('App starting error:', err.stack);
//       process.exit(1);
//    });

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'reviews',
  password: 'admin',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'reviews',
  password: 'admin',
  port: 5432,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

// var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const getReviewsForId = (id, cb) => {
  Review.find({ w_id: id }, (err, document) => {
    if (err) { throw err; }
    cb(document);
  });
};

module.exports.getReviewsForId = getReviewsForId;
module.exports.database = db;
