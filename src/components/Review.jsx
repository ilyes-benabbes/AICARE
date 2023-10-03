import React from "react";
import ReactStars from "react-rating-stars-component" ;
function Review({ review }) {
console.log('review.rating', review.rating)
  return (
    <div className="col">
      <div className="drow">
        <img src={"girl.jpg"} alt="profile.png" />
        <div className="col">
          <p>{"commentor.name : illyes"}</p>
          <ReactStars>
            count={5}
            ishalf={true}
            edit={false}
            value={review.rating}
            size={15}
            activeColor="#ffd700"
          </ReactStars>
        </div>
      </div>
      <div className="drow">
        <p>{review.content}</p>
      </div>
    </div>
  );
}

export default Review;
