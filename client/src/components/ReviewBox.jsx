import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatings from 'react-star-ratings';

const ReviewBox = props => {
  return (
  	<StyledReviewPadding>

      <StyledStarsContainer>
        <StarRatings
          rating={props.review.stars}
          starRatedColor="black"
          numberOfStars={5}
          name='rating'
          starDimension="12px"
          starSpacing="2px"
          starEmptyColor="white"
        />
        <StyledDate>{moment(props.review.date_posted).format('MM/DD/YYYY')}</StyledDate>
      </StyledStarsContainer>
  	  <StyledUser>
  	    {props.review.reviewer}
  	    <StyledBanner> VERIFIED BUYER </StyledBanner>
      </StyledUser>
  	  <StyledTitle>{props.review.review_header}</StyledTitle>
  	  <StyledContentWrapper>
  	    <StyledReviewContent>{props.review.review_body}</StyledReviewContent>
        {props.key}
  	  </StyledContentWrapper>
      <div className="review-votes"></div>

  	</StyledReviewPadding>
  	)
}

const StyledReviewPadding = styled.div`
  width: 300px;
  height: 390px;
  margin: 20px 10px 20px 10px;
  display: inline-block;
  flex-direction: row;
  border-style: solid;
  border-width: 2px;
  border-color: #D3D3D3;
`;

const StyledStarsContainer = styled.div`
  width: 240px;
  height: 30px;
  display: inline;
  float: left;
  vertical-align: middle;
  margin: 35px;
`;

const StyledUser = styled.div`
  width: 240px;
  height: 30px;
  font-variant: small-caps;
  display: inline;
  float: left;
  vertical-align: middle;
  margin: 35px;
`;

const StyledBanner = styled.span`
  width: 90px;
  height: 10px;
  display: inline;
  float: right;
  vertical-align: middle;
  font-size: 8px;
  color: #D3D3D3;
  margin: 5px;
`;

const StyledDate = styled.div`
  width: 55px;
  height: 15px;
  font-size: 8px;
  color: #D3D3D3;
  display: flex;   
  position: relative;
  display: inline;
  float: right;
  vertical-align: middle;
  margin: auto;

`;

const StyledTitle = styled.div`
  width: 240px;
  height: 30px;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 10px;
  display: flex;   
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
`;

const StyledContentWrapper = styled.div`
  display: flex; 
  width: 240px;
  height: 180px;
  display: inline-block;
  margin: auto;
`;

const StyledReviewContent = styled.div`
  text-align: center;
  overflow-y: auto;
  word-wrap: break-word;
  word-break: normal;
  line-break: strict;
  white-space: normal;
  width: 230px;
  height: 150px;
  position: relative;
  margin: auto;
  font-family: 'Questrial', sans-serif;
  letter-spacing: 1.1px;
`;

const StyledShareBar = styled.div`
  width: 240px;
  height: 40px;
  display: flex; 
  position: relative;
  font-size: 15px;
  flex-wrap: wrap;
`;

const StyledReviewVotes = styled.div`
  width: 230px;
  height: 15px;
  display: flex; 
  position: relative;
  font-size: 15px;
  flex-wrap: wrap;
`;

export default ReviewBox;
