DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL UNIQUE PRIMARY KEY,
  reviewer TEXT,
  stars INT,
  date_posted TEXT,
  review_id INT,
  review_header TEXT,
  review_body TEXT,
  upvotes INT,
  downvotes INT
);