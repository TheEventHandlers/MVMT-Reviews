import React from 'react';

const ReviewBox = props => {
  return (
     <div className="review">
       <div className="review-user">
         {props.review.reviewer}
       </div>
     </div>
  	)
}

export default ReviewBox;