import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartCard from "../layout/card/CartCard";
const Cart = () => {
  return (
    <div className="container">
      <div className="cart">
        <div className="cart__main">
          <h1 className="heading--primary">Shopping Cart</h1>

          <p className="cart__count">4 items</p>

          <div className="cart__list">
            <CartCard />
          </div>

          <Link to="/" className="btn btn--more">
            <span>&#8636; </span> Continue Shopping
          </Link>
        </div>

        <div className="cart__summarry">
          <h1 className="heading--primary mb-3">Summarry</h1>
          <div className="row mb-1">
            <div className="col-6">
              <h3 className="cart__title">Total Amount</h3>
            </div>
            <div className="col-6">
              <p className="cart__total">
                <span>₱</span> 0.00
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <h3 className="cart__title">Total Tax</h3>
            </div>
            <div className="col-6">
              <p className="cart__total">
                <span>₱</span> 0.00
              </p>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-6">
              <h3 className="cart__title">Subtotal</h3>
            </div>
            <div className="col-6">
              <p className="cart__total">
                <span>₱</span> 0.00
              </p>
            </div>
          </div>

          <button className="btn btn--summarry mt-4">Proceed Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
