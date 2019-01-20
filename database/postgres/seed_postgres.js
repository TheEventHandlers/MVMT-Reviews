const { Pool, Client } = require('pg');
const config = require('./config');
// const schema = require('./schema_postgres.sql');
const path = require('path');

const dataCSV = path.join(__dirname, '../data.csv');

const client = new Client(config);

client.connect();

const schema = `CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL UNIQUE PRIMARY KEY,
  w_id INT,
  reviewer TEXT,
  stars INT,
  date_posted TEXT,
  review_header TEXT,
  review_body TEXT,
  upvotes INT,
  downvotes INT
);`;

client.query(schema, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Table created!');
  }
})

const saveData = () => {
  const beforeQuery = Date.now();
  client.query(`COPY reviews(id, w_id, reviewer, stars, date_posted, review_header, review_body, upvotes, downvotes) FROM \'${dataCSV}\' DELIMITERS ',' CSV HEADER;`, (err) => {
    if (err) {
      console.log('error', err);
    } else {
      const afterQuery = Date.now();
      const queryTime = (afterQuery - beforeQuery)/60000;
      console.log(`CSV file loaded into Postgres in ${queryTime} minutes`);
    }
  })
}

saveData();

client.query(`CREATE INDEX foreign_key ON reviews (w_id);`, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Index created on column w_id!');
  }
})

// client.end();