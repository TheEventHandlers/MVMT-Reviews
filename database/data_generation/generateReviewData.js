const mongoose = require('mongoose');
const { Review } = require('../Review_schema.js');
const lorem = require('lorem-ipsum');
const faker = require('faker');

mongoose.connect('mongodb://172.17.0.2/fec', { useNewUrlParser: true });

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
    review_body: "I was searching for a watch for my girlfriend as an engagement gift. I had been looking at fossil but just didn’t like any of them. My brother recommended MVMT and I had such a hard deciding because I LOVED them all. Our wedding was yesterday and my fiancé loves this watch and all of his groomsmen loved it as well! Definitely plan to purchase more!",
    upvotes: 0,
    downvotes: 16
  },

  {
    _id: 1005,
    w_id: 100,
    reviewer: "George Q", 
    stars: 5,
    date_posted: new Date("<1986-10-24>"),
    review_header: "Greatest watch ever",  
    review_body: "10/10, will buy a dozen more just like it.",
    upvotes: 6,
    downvotes: 0
  },
  {
    _id: 1006,
    w_id: 100,
    reviewer: "Cherri H", 
    stars: 4,
    date_posted: new Date("<1986-10-25>"),
    review_header: "Not bad",  
    review_body: "It doesn't get the job done.",
    upvotes: 9,
    downvotes: 1
  },

  {
    _id: 1007,
    w_id: 100,
    reviewer: "Aaron D", 
    stars: 5,
    date_posted: new Date("<1986-10-26>"),
    review_header: "The best purchase I ever made.",  
    review_body: "It's great",
    upvotes: 4,
    downvotes: 2
  },

  {
    _id: 1008,
    w_id: 100,
    reviewer: "Linden C", 
    stars: 5,
    date_posted: new Date("<1986-10-27>"),
    review_header: "Cool",  
    review_body: "I was searching for a watch for my fiancé as a wedding gift. I had been looking at fossil but just didn’t like any of them. My brother recommended MVMT and I had such a hard deciding because I LOVED them all. Our wedding was yesterday and my fiancé loves this watch and all of his groomsmen loved it as well! Definitely plan to purchase more!",
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

  let newId = 1009;

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
