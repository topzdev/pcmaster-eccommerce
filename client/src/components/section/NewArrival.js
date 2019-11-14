import React from "react";

import CardProduct from "../layout/card/CardProduct";
const NewArrival = () => {
  return (
    <div className="container">
      <section className="section section--primary">
        <h1 className="heading--primary">New Arrival</h1>
        <div className="row">
          <div className="col-3">
            <CardProduct />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrival;
