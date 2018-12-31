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
          starDimension="10px"
          starSpacing="2px"
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
  	  </StyledContentWrapper>
      <div className="review-votes"></div>

  	</StyledReviewPadding>
  	)
}

const StyledReviewPadding = styled.div`
  width: 300px;
  height: 390px;
  margin: 20px 10px 20px 10px;
  display: inline-flex;
  flex-direction: row;
  border-style: solid;
  border-width: 2px;
  border-color: #D3D3D3;
  background-color: lightblue;
`;

const StyledStarsContainer = styled.div`
  width: 240px;
  height: 30px;
  background-color: blue;
  flex-wrap: wrap;
`;

const StyledUser = styled.div`
  width: 250px;
  height: 20px;
  display: flex; 
  font-family: 'Questrial', sans-serif;
  font-size: 10px;
  background-color: yellow;
  flex-wrap: wrap;
`;

const StyledBanner = styled.span`
  width: 90px;
  height: 10px;
  display: flex; 
  position: relative;
  font-size: 8px;
  color: #D3D3D3;
  background-color: red;
`;

const StyledDate = styled.div`
  width: 55px;
  height: 15px;
  font-size: 8px;
  color: #D3D3D3;
  display: flex;   
  background-color: green;
  flex-wrap: wrap;

`;

const StyledTitle = styled.div`
  width: 240px;
  height: 40px;
  font-size: 15px;
  display: flex;   
  position: relative;
  background-color: orange;
  flex-wrap: wrap;
`;

const StyledContentWrapper = styled.div`
  display: flex; 
  width:240px;
  height:180px;
  background-color: purple;
  flex-wrap: wrap;
`;

const StyledReviewContent = styled.div`
  font-family: 'Questrial', sans-serif;
  font-size: 10px;
  text-align: center;
  overflow-wrap: normal;
  width: 230px;
  height: 210px;
  max-height: 150px;
  overflow-y: scroll;
  position: relative;
  display: flex;   
  flex-wrap: wrap;
  background-color: pink;
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
