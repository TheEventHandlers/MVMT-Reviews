const fs = require('fs');
const path = require('path');
const lorem = require('lorem-ipsum');
const faker = require('faker');
const json2csv = require('json2csv').parse;


const randomIntFromInterval = (min, max) =>// min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

const generateReviews = (numberOfWatches) => {
	const firstWatchId = 101;
  let nextReviewId = 1001; // auto-increment
  let reviewArray = [];

  for (let watchId = firstWatchId; watchId <= numberOfWatches + firstWatchId; watchId += 1) {
    let reviewsForThisWatch = randomIntFromInterval(4, 100);
    for (let review = 1; review <= reviewsForThisWatch; review += 1) {
      const record = {};
      record._id = nextReviewId;
      record.w_id = watchId;
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
      nextReviewId++;

    	reviewArray.push(record);
    }
  }
  return reviewArray;
};

const fields = ['_id', 'w_id', 'reviewer', 'stars', 'date_posted', 'review_header', 'review_body', 'upvotes', 'downvotes'];
const opts = { fields };

// 192500 = 10 million / 52 reviews on average
const csv = json2csv(generateReviews(100), opts);

// const writeStream = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });

fs.writeFile(path.join(__dirname, '/data.csv'), csv, (err) => {  
    if (err) throw err;
    console.log('Data seeding complete!');
});
