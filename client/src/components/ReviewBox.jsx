import React from 'react';
import styled from 'styled-components';

const ReviewBox = props => {
  return (
  	<div className="wrapper">
  	  <div className="review-user">
  	    {props.review.reviewer}
  	    <span> VERIFIED BUYER </span>
      </div>
  	  <div className="review-date">{props.review.date_posted.toString()}</div>
  	  <div className="review-title">{props.review.review_header}</div>
  	  <div className="review-content-wrapper">
  	    <div className="review-content">{props.review.review_body}</div>
  	  </div>
      <div className="review-votes"></div>

  	</div>
  	)
}

export default ReviewBox;
