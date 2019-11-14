import React from "react";
import test_img from "../../../resources/images/test-1.png";
import test_img2 from "../../../resources/images/test-2.jpg";
import test_img3 from "../../../resources/images/test-3.jpg";
import test_img4 from "../../../resources/images/test-4.jpg";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="card--primary">
      <div className="card--primary__main">
        <img className="card--primary__img" src={test_img} alt="" />
        <img className="card--primary__b-img" src={test_img2} alt="" />

        <Link to="\" className="card--primary__cover"></Link>
      </div>

      <div className="card--primary__body">
        <Link to="/" className="card--primary__title">
          MSI MPG X570 GAMING EDGE WIFI
        </Link>
        <p className="card--primary__price">₱10,970.00</p>
        <div className="card--primary__btn">
          <button className="card--primary__link">
            <span>
              <i className="fas fa-shopping-cart"></i>
            </span>
            <p>Add to cart</p>
          </button>
          <button className="card--primary__link">
            <span>
              <i className="far fa-eye"></i>
            </span>
          </button>
          <button className="card--primary__link">
            <span>
              <i className="far fa-heart"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
