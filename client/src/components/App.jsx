import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import ReviewBox from './ReviewBox.jsx';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	id: null,
    	reviews: dummyShowcaseReviews
    };
  }

  componentDidMount() {
  	
  }


  render() {
    return (
      <div>
    	<h2> {this.state.reviews.length} CUSTOMER REVIEWS </h2>
    	<div className="all-reviews">
          {this.state.reviews.map(function(review, index) {
               return <ReviewBox key={index} review={review}/>
              })}
    	</div>
      </div>

    	)
  }
}

export default App;
