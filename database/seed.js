const fs = require('fs');
const path = require('path');
const lorem = require('lorem-ipsum');
const faker = require('faker');
const json2csv = require('json2csv').parse;


const randomIntFromInterval = (min, max) =>// min and max included
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

// const firstWatchId = 101;
// const lastWatchId = 199;
let reviewId = 0;
let watchId = 100; // auto-increment

const generateCSVReview = () => {
	const record = {};
	record._id = reviewId;
	record.w_id = watchId;
	record.reviewer = faker.name.findName();
	record.stars = faker.random.number({
	  'min': 1,
	  'max': 5
	});
	record.date_posted = faker.date.past();
	record.review_header = faker.lorem.words();
	record.review_body = faker.lorem.paragraph();
	record.upvotes = faker.random.number(50);
	record.downvotes = faker.random.number(50);
	reviewId++;

	if (reviewId % 5 === 0) {
		watchId++;
	}

  return json2csv(record, {header: false});
};

const showInfrequentProgressUpdate = function(remaining, total) {
	// Only update the progress bar every 1000 entries
	if (remaining % 1000 == 0) {
		showProgressUpdate(remaining, total)
	}
}

const showProgressUpdate = function(remaining, total) {
	const current = total - remaining;

	const currentPct = current / total * 100;
	const remainingPct = remaining / total * 100;

	let progressBar = '[';
	for (var i = 0; i < currentPct; i++) {
		progressBar += '=';
	}
	progressBar += "|";
	for (var i = 0; i < remainingPct; i++) {
		progressBar += '-';
	}
	progressBar += "] ";
	progressBar += currentPct.toFixed(2) + "%"
	// Overwrite previous progress bar
	process.stdout.write("\r");
	process.stdout.write(progressBar);
}

const writeStream = fs.createWriteStream(path.join(__dirname, '/data.csv'), { flags: 'w' });
writeStream.write(`_id, w_id, reviewer, stars, date_posted, review_header, review_body, upvotes, downvotes\n`);

const writeData = function(entriesTodo) {
	let ok = writeStream.write(generateCSVReview() + '\n')

	if (entriesTodo < 1) {
		// Show progress bar at 100%
		showProgressUpdate(0, reviewsToGenerate);
		 // New line after progress bar
		process.stdout.write("\n");
		const seedTime = Math.floor((Date.now() - start) / 1000);
		console.log(`Generated ${reviewsToGenerate} watch reviews in ${seedTime} seconds!`);
		return true;
	}

	if (ok) {
		showInfrequentProgressUpdate(entriesTodo - 1, reviewsToGenerate);
		writeData(entriesTodo - 1);
	} else {
		writeStream.once('drain', () => {
			showInfrequentProgressUpdate(entriesTodo - 1, reviewsToGenerate);
      writeData(entriesTodo - 1);
    });
	}
}

const reviewsToGenerate = 50000000;
// 10000000 = 10 million (if random reviews per watch)
// 50000000 = 50 million (if 5 reviews per watch @ 10 million watches)

const start = Date.now();
writeData(reviewsToGenerate);
