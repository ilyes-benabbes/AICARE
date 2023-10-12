import React from "react";
import Rating from '@mui/material/Rating';
function Review({ review , myName  }) {
console.log('review.rating', review.rating)
  return (
    <div className="col review">
      <div className="drow">
        <img src={"girl.jpg"} alt="profile.png" />
        <div className="col">
          <p>{review.from_user}</p>
          <Rating
        name="simple-controlled"
        value={review.rating}
        readOnly
      />
        </div>
      </div>
      <div className="col">
        <p>{review.review}</p>
        {review.replay && <div className="reply">
          <p>{"reply from "+ myName}</p>
          <p>{review.replay}</p></div>}
      </div>
    </div>
  );
}

export default Review;
