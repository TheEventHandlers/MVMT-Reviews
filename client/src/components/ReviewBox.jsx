import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ReviewBox = props => {
  return (
  	<StyledReviewPadding>
  	  <StyledUser>
  	    {props.review.reviewer}
  	    <StyledBanner> VERIFIED BUYER </StyledBanner>
      </StyledUser>
  	  <StyledDate>{moment(props.review.date_posted).format('MM/DD/YYYY')}</StyledDate>
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
`;

const StyledUser = styled.div`
  width: 250px;
  height: 20px;
  display: flex; 
  position: relative;
  font-family: 'Questrial', sans-serif;
  font-size: 10px;
`;

const StyledBanner = styled.span`
  width: 90px;
  height: 10px;
  display: flex; 
  position: relative;
  font-size: 8px;
  color: #D3D3D3;
`;

const StyledDate = styled.div`
  width: 55px;
  height: 15px;
  font-size: 8px;
  color: #D3D3D3;
  display: flex;   
  position: relative;

`;

const StyledTitle = styled.div`
  width: 240px;
  height: 40px;
  position: relative;
  font-size: 15px;
  display: flex;   
  position: relative;
`;

const StyledContentWrapper = styled.div`
  display: flex; 
  position:relative;
  width:240px;
  height:180px;
`;

const StyledReviewContent = styled.div`
  font-family: 'Questrial', sans-serif;
  font-size: 10px;
  text-align: left;
  overflow-wrap: normal;
  width: 230px;
  height: 210px;
  max-height: 150px;
  overflow-y: scroll;
  position: relative;
  display: inline-flex;   
  flex-wrap: wrap;
`;

const StyledShareBar = styled.div`
  width: 240px;
  height: 40px;
  display: flex; 
  position: relative;
  font-size: 15px;
`;

export default ReviewBox;
