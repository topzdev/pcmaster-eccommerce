import React from "react";
import { Link } from "react-router-dom";
import ImageListView from "../../layout/ImageListView";
import ProductTab from "./ProductTab";

//Tabs

const ProductDetails = () => {
  return (
    <div className="container">
      <div className="details">
        <ImageListView />
        <div className="divdetails__description">
          <h1 className="details__title">MSI MPG X570 GAMING EDGE WIFI</h1>
          <p className="details__price">₱10,970.00</p>
          <p className="details__overview mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            iste magni. Nesciunt libero ab hic dicta dignissimos iusto animi
            ullam totam repellat sunt, quas facere molestias nobis officiis
            pariatur. Facere odio voluptates incidunt ullam quasi praesentium
            cum blanditiis voluptatibus nobis.
          </p>

          <div className="details__main-btn">
            <div className="inp--quantity mb-2">
              <button>&mdash;</button>
              <input
                className="inp"
                type="number"
                name=""
                id=""
                min="1"
                max="100"
              />
              <button>+</button>
            </div>
          </div>
          <button className="btn btn--primary mt-2">
            <span>
              <i class="fas fa-shopping-cart"></i>
            </span>
            Add to Cart
          </button>

          <div className="details__btn">
            <button className="btn btn--wishlist">
              <span>
                <i class="far fa-heart"></i>
              </span>
              Add to Wishlist
            </button>
            <button className="btn btn--wishlist">
              <span>
                <i class="fas fa-random"></i>
              </span>
              Compare Product
            </button>
          </div>

          <ul className="details__others">
            <li>
              <b>Category: </b>
              <Link to="/">Components</Link>, <Link to="/">Motherboard</Link>
            </li>
            <li>
              <b>Tags: </b>
              <Link to="/">MSI</Link>, <Link to="/">Gaming</Link>,{" "}
              <Link to="/">motherboard</Link>
            </li>
            <li>
              <b>Share: </b>
              <Link to="/">
                <span>
                  <i class="fab fa-facebook"></i>
                </span>
              </Link>{" "}
              <Link to="/">
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </Link>{" "}
              <Link to="/">
                <span>
                  <i class="fab fa-pinterest"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="details__tab">
        <ProductTab />
      </div>
    </div>
  );
};

export default ProductDetails;
