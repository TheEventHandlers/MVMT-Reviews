import React from 'react';
import styled from 'styled-components';

const ReviewBox = props => {
  return (
  	<StyledReviewWrapper>
  	  <div className="review-user">
  	    {props.review.reviewer}
  	    <span> VERIFIED BUYER </span>
      </div>
  	  <div className="review-date">{props.review.date_posted.toString()}</div>
  	  <div className="review-title">{props.review.review_header}</div>
  	  <StyledContentWrapper>
  	    <div className="review-content">{props.review.review_body}</div>
  	  </StyledContentWrapper>
      <div className="review-votes"></div>

  	</StyledReviewWrapper>
  	)
}

const StyledReviewWrapper = styled.div`
  height: 400px;
  padding: 20px;
  display: inline-flex;
  flex-direction: row;
  border-style: solid;
  border-width: 2px;
  border-color: #D3D3D3;
`;

const StyledContentWrapper = styled.div`
  position:relative;
  width:100px;
  height:100px;

`;

export default ReviewBox;
