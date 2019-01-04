import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import { FaThumbsUp, FaThumbsDown, FaFacebook, FaLinkedin, FaTwitter, FaShareSquare } from 'react-icons/fa';

const ReviewBox = (props) => {
  let formattedUserName = props.review.reviewer.split(' ');
  formattedUserName = formattedUserName[0] + ' ' + formattedUserName[1][0] + '.';

  let flexToggle = null;
  if (props.isToggled) {
    flexToggle = <StyledShareFlex>{'\u00A0'}{' | '}{'\u00A0'}<FaFacebook />{'\u00A0'}<FaLinkedin />{'\u00A0'}<FaTwitter /></StyledShareFlex>
  }

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
  	    {formattedUserName}
  	    <StyledBanner> VERIFIED BUYER </StyledBanner>
      </StyledUser>
  	  <StyledTitle>{props.review.review_header}</StyledTitle>
  	  <StyledContentWrapper>
  	    <StyledReviewContent>{props.review.review_body}</StyledReviewContent>
        {props.key}
  	  </StyledContentWrapper>
      <StyledShareBar onClick={props.toggleClick} >
        <StyledShareToggle><FaShareSquare /> {' ' + 'share'}</StyledShareToggle> 
        { flexToggle }
      </StyledShareBar>
      <StyledReviewVotes>
        was this review helpful?
        <StyledUpvote> <FaThumbsUp />{'\u00A0'}{props.review.upvotes}</StyledUpvote>
        <StyledDownvote> <FaThumbsDown />{'\u00A0'}{props.review.downvotes} </StyledDownvote>
      </StyledReviewVotes>

  	</StyledReviewPadding>
  	)
};

const StyledReviewPadding = styled.div`
  width: 300px;
  height: 390px;
  margin: 20px 10px 20px 10px;
  display: inline-block;
  flex-direction: row;
  border-style: solid;
  border-width: 2px;
  border-color: #D3D3D3;
  font-family: 'futura-pt', arial, sans-serif;
  letter-spacing: 1.5px
`;

const StyledStarsContainer = styled.div`
  width: 240px;
  height: 30px;
  display: inline;
  float: left;
  vertical-align: middle;
  margin-top: 30px;
  margin-bottom: 5px;
  margin-right: 50px;
  margin-left: 20px;
`;

const StyledUser = styled.div`
  width: 180px;
  height: 30px;
  font-variant: small-caps;
  font-weight: bold;
  font-size: 13px;
  display: inline;
  float: left;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: 20px;
`;

const StyledBanner = styled.span`
  width: 70px;
  height: 10px;
  display: inline;
  float: right;
  vertical-align: middle;
  font-size: 8px;
  color: #D3D3D3;
  margin-top: 5px;
  margin-bottom: 0px;
  margin-right: 15px;
  margin-left: 0px;
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
  font-size: 13px;
  display: flex;   
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 15px;
  margin-left: 20px;
`;

const StyledContentWrapper = styled.div`
  display: flex; 
  width: 240px;
  height: 180px;
  display: inline-block;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 75px;
  margin-left: 0px;
`;

const StyledReviewContent = styled.div`
  text-align: left;
  overflow-y: auto;
  word-wrap: break-word;
  word-break: normal;
  line-break: strict;
  white-space: normal;
  width: 230px;
  height: 150px;
  position: relative;
  margin: 20px;
`;

const StyledShareBar = styled.div`
  width: 138px;
  height: 16px;
  display: flex; 
  position: relative;
  font-family: 'futura-pt', arial, sans-serif;
  font-size: 11px;
  font-variant: small-caps;
  font-weight: 500
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-right: 15px;
  margin-left: 20px;
`;

const StyledShareToggle = styled.div`
  width: 50px;
  height: 14px;
  display: flex; 
  position: relative;
  font-size: 11px;
`;

const StyledShareFlex = styled.div`
  width: 80px;
  height: 14px;
  display: flex; 
  position: relative;
  font-size: 11px;
`;

const StyledReviewVotes = styled.div`
  width: 230px;
  height: 15px;
  display: flex; 
  position: relative;
  font-family: 'futura-pt', arial, sans-serif;
  font-size: 11px;
  font-variant: small-caps;
  font-weight: 500
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 15px;
  margin-left: 20px;
`;

const StyledUpvote = styled.span`
  width: 35px;
  height: 14px;
  display: flex; 
  position: relative;
  font-size: 11px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 5px;
  margin-left: 10px;
`;

const StyledDownvote = styled.span`
  width: 35px;
  height: 14px;
  display: flex; 
  position: relative;
  font-size: 11px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 5px;
  margin-left: 10px;
`;

export default ReviewBox;
