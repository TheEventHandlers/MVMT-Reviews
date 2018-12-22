const mongoose = require('mongoose');
const { Review } = require('../Review_schema.js');
const lorem = require('lorem-ipsum');
const faker = require('faker');

mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const dummyShowcaseReviews = [
{
  _id: 1001,
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
},

{
  _id: 1003,
  w_id: 100,
  reviewer: "Aaron Deane", 
  stars: 5,
  date_posted: new Date("<1987-10-22>"),
  review_header: "The best purchase I ever made.",  
  review_body: "It's great",
  upvotes: 4,
  downvotes: 2
},

{
  _id: 1004,
  w_id: 100,
  reviewer: "Linden Chiu", 
  stars: 5,
  date_posted: new Date("<1987-10-23>"),
  review_header: "Cool",  
  review_body: "!!!!!",
  upvotes: 0,
  downvotes: 16
}
];

const randomIntFromInterval = (min, max) =>// min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

const generateAndStoreReviews = () => {
  
  for (let i = 0; i < dummyShowcaseReviews.length; i++) {
    Review.create(dummyShowcaseReviews[i], (err) => {
    if (err) { throw (err); }
  });
  }

  for (let i = 101; i <= 199; i += 1) {
    let range = randomIntFromInterval(4, 100);
    for (let j = 4; j <= range; j += 1) {
      const record = {};
      record._id = faker.random.number(15000);
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

      Review.create(record, (err) => {
        if (err) { throw err; }
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
