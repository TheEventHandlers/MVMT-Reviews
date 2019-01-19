const { Pool, Client } = require('pg');
const config = require('./config');
const schema = require('./schema');
const path = require('path');

const dataCSV = path.join(__dirname, '../data.csv');

const client = new Client(config);

client.connect();

client.query(schema, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('success');
  }
})

const saveData = () => {
  const beforeQuery = Date.now();
  client.query(`COPY (id, reviewer, stars, date_posted, review_id, review_header, review_body, upvotes, downvotes) FROM \'${dataCSV}\' DELIMITERS ',' CSV HEADER;`, (err) => {
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

client.end();