import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import random from "../../../resources/images/random.jpg";
const Comment = () => {
  return (
    <div className="card--comment">
      <div className="card--comment__main">
        <div className="card--comment__profile">
          <Link to="/" className="card--comment__icon">
            <img src={random} alt="" className="image" />
          </Link>
          <Link to="/" className="card--comment__name">
            John Doe
            <span>January 29, 2019 5:59 am</span>
          </Link>
        </div>
        <div className="card--comment__rate">
          <StarRatingComponent
            name="comment-rate"
            editing={false}
            renderStarIcon={() => <i class="fas fa-star"></i>}
            renderStarIconHalf={() => <i class="fas fa-star-half-alt"></i>}
            starCount={5}
            value={5}
          />
        </div>
      </div>
      <div className="card--comment__content">
        <h1>This motherboard is great!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          necessitatibus repudiandae eligendi ratione beatae officiis sequi
          facilis alias ex iusto. Dolor, expedita facere! Vel sit laborum
          corrupti. Delectus, explicabo consequatur.
        </p>
      </div>
    </div>
  );
};

export default Comment;
