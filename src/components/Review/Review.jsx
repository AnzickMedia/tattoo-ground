import React from "react";
import "./Review.scss";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="o-review-container">
      <div className="o-review-card">
        <div className="o-img-review">
          <img src="assets/carousel-card-img-circle.png" alt="img" />
        </div>
        <div className="o-right-container">
          <h2>Radamel Garcia</h2>
          <div className="stars">
          <AiFillStar color="rgb(208, 211, 18)"/>
          <AiFillStar color="rgb(208, 211, 18)"/>
          <AiFillStar color="rgb(208, 211, 18)"/>
          <AiFillStar color="rgb(208, 211, 18)"/>
            <AiOutlineStar />
            
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            voluptas nulla sit architecto aliquid ipsa quis inventore.
            Veritatis, ad aliquam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
