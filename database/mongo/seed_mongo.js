const mongoose = require('mongoose');
const { Review } = require('./schema_mongo.js');
const lorem = require('lorem-ipsum');
const faker = require('faker');

mongoose.connect('mongodb://172.17.0.1:27017/fec', { useNewUrlParser: true })
  .catch(err => {
    console.log(err)
  });



const randomIntFromInterval = (min, max) =>// min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

const generateAndStoreReviews = () => {

  let newId = 1001;

  for (let i = 101; i <= 199; i += 1) {
    let range = randomIntFromInterval(4, 100);
    for (let j = 4; j <= range; j += 1) {
      const record = {};
      record._id = newId;
      record.w_id = i;
      record.reviewer = faker.name.findName();
      record.stars = faker.random.number({
        'min': 1,
        'max': 5
      });
      record.date_posted = faker.date.past();
      record.review_header = faker.lorem.words();
      record.review_body = faker.lorem.paragraphs();
      record.upvotes = faker.random.number(100);
      record.downvotes = faker.random.number(100);
      newId++;

      Review.create(record, (err) => {
        if (err) { throw err; }
        if (i === 199) {
          process.exit();
        }
      });
    }
  }
};

const seedDB = () => {
  Review.deleteMany({}, (err) => {
    if (err) { throw err; }
    generateAndStoreReviews();
  });
};

seedDB();

/* Example data:
  [
    {
      _id: Num,
      w_id: 100,
      reviewer: "George Qian", 
      stars: 5,
      date_posted: new Date("<1987-10-20>"),
      review_header: "Greatest watch ever",  
      review_body: "I love this watch, it's the most amazing thing. 10/10, will buy a dozen more just like it.",
      upvotes: 6,
      downvotes: 0
    },
    {
      _id: 1002,
      w_id: 100,
      reviewer: "Cherri Hartigan", 
      stars: 4,
      date_posted: new Date("<1987-10-21>"),
      review_header: "Not bad",  
      review_body: "It gets the job done.",
      upvotes: 9,
      downvotes: 1
    }
  ];
*/
