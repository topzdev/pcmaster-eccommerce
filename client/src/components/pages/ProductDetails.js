import React from "react";

import ImageListView from "../layout/ImageListView";
const ProductDetails = () => {
  return (
    <div className="container">
      <div className="details">
        <ImageListView />
        <div className="details__description">
          <h1 className="details__title">MSI MPG X570 GAMING EDGE WIFI</h1>
          <p className="details__price">₱10,970.00</p>
          <p className="details__overview mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            iste magni. Nesciunt libero ab hic dicta dignissimos iusto animi
            ullam totam repellat sunt, quas facere molestias nobis officiis
            pariatur. Facere odio voluptates incidunt ullam quasi praesentium
            cum blanditiis voluptatibus nobis.
          </p>
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
          <button className="btn btn--primary">
            <span>
              <i class="fas fa-shopping-cart"></i>
            </span>{" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
