const { Pool, Client } = require('pg');
const config = require('./config.js');
const path = require('path');

const dataCSV = path.join(__dirname, '../data.csv');

const pool = new Pool(config);

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

pool.on('error', (err) => {
  console.log('Error', err);
})

// const client = new Client(config);

// // client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


const saveData = () => {
  const beforeQuery = Date.now();
  pool.query(`COPY (id, reviewer, stars, date_posted, review_id, review_header, review_body, upvotes, downvotes) FROM \'${dataCSV}\' DELIMITERS ',' CSV HEADER;`, (err) => {
    if (err) {
      console.log('error', err);
    } else {
      const afterQuery = Date.now();
      const queryTime = (afterQuery - beforeQuery)/6000;
      console.log('success!');
      console.log(`CSV file loaded into Postgres in ${queryTime} minutes`);
    }
  })
}

saveData();

pool.end()
