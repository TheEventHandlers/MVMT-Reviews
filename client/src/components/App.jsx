import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import parseUrl from 'parse-url';

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
	review_body: "I was searching for a watch for my fiancé as a wedding gift. I had been looking at fossil but just didn’t like any of them. My brother recommended MVMT and I had such a hard deciding because I LOVED them all. Our wedding was yesterday and my fiancé loves this watch and all of his groomsmen loved it as well! Definitely plan to purchase more!",
	upvotes: 0,
	downvotes: 16
  }
];

const StyledComponentHeader = styled.h2`
  display: flex;
  justify-content: center;

`;


const StyledNumberBanner = styled.span`
  width: 300px;
  height: 30px;
  
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	id: null,
    	reviews: null
    };
  }

  componentDidMount() {
    const parsedUrl = parseUrl(window.location.href);
    const pathname = parsedUrl.pathname;
    const wid = pathname.substring(pathname.length - 3); 
    if (wid < 100 || wid > 199) { return; }

    axios.get(`/api/watches/${wid}/reviews`)
      .then((reviews) => {

        if (reviews.data.length < 4) {
          return null;
        }
        let newState = { reviews: reviews.data};
        this.setState((state) => {
          return newState;
        });
      })
      .catch((error) => {
        console.log('Error', error);
      })
  	
  }


  render() {
    if (this.state.reviews === null) {
      return null;
    }

    return (
      <div>
    	  <StyledComponentHeader> 
          <StyledNumberBanner>{this.state.reviews.length + " CUSTOMER REVIEWS"} </StyledNumberBanner>
        </StyledComponentHeader>
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
