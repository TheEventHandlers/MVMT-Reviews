DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL UNIQUE PRIMARY KEY,
  w_id INT,
  reviewer TEXT,
  stars INT,
  date_posted TEXT,
  review_header TEXT,
  review_body TEXT,
  upvotes INT,
  downvotes INT
);