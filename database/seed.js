const fs = require('fs');
const path = require('path');
const lorem = require('lorem-ipsum');
const faker = require('faker');
const json2csv = require('json2csv').parse;


const randomIntFromInterval = (min, max) =>// min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

const firstWatchId = 101;
const lastWatchId = 199;
let nextReviewId = 1001; // auto-increment

const generateCSVReview = () => {
	const record = {};
	record._id = nextReviewId;
	record.w_id = randomIntFromInterval(firstWatchId, lastWatchId);
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

  return json2csv(record, {header: false});
};


const writeStream = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
writeStream.write(`_id, w_id, reviewer, stars, date_posted, review_header, review_body, upvotes, downvotes\n`);

const writeData = function(entriesTodo) {
	let ok = writeStream.write(generateCSVReview() + '\n')

	if (entriesTodo < 1) {
		return true;
	}

	if (ok) {
		console.log(`Wrote an entry. ${entriesTodo - 1} reviews to go!`);
		writeData(entriesTodo - 1);
	} else {
		writeStream.once('drain', () => {
			console.log(`Drained the buffer. ${entriesTodo - 1} reviews to go!`);
      writeData(entriesTodo - 1);
    });
	}
}

// 10 million
writeData(10000000);
