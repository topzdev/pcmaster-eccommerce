import React from "react";
import { Link } from "react-router-dom";
import sample from "../../resources/images/test-2.jpg";
const Cart = () => {
    return (
        <div className='container'>
            <div className='cart'>
                <div className='cart__main'>
                    <h1 className='heading--primary'>Shopping Cart</h1>

                    <p className='cart__count'>4 items</p>

                    <div className='cart__list'>
                        <div className='cart__item'>
                            <div className='cart__img'>
                                <img src={sample} alt='' draggable='false' />
                            </div>
                            <div className='cart__description'>
                                <Link to='/' className='cart__title'>
                                    Philips SHB1801P Car kit Bluetooth Headset
                                </Link>

                                <p className='cart__price'>₱1,900.00</p>
                            </div>

                            <div className='inp--quantity'>
                                <button>&mdash;</button>
                                <input
                                    className='inp'
                                    type='number'
                                    name=''
                                    id=''
                                    min='1'
                                />
                                <button>+</button>
                            </div>

                            <p className='cart__total'>
                                <span>₱</span> 1,900.00
                            </p>

                            <button className='cart__remove'>
                                <i class='fas fa-times'></i>
                            </button>
                        </div>
                    </div>

                    <Link to='/' className='btn btn--more'>
                        <span>&#8636; </span> Continue Shopping
                    </Link>
                </div>

                <div className='cart__summarry'>
                    <h1 className='heading--primary mb-3'>Summarry</h1>
                    <div className='row mb-1'>
                        <div className='col-6'>
                            <h3 className='cart__title'>Total Amount</h3>
                        </div>
                        <div className='col-6'>
                            <p className='cart__total'>
                                <span>₱</span> 0.00
                            </p>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-6'>
                            <h3 className='cart__title'>Total Tax</h3>
                        </div>
                        <div className='col-6'>
                            <p className='cart__total'>
                                <span>₱</span> 0.00
                            </p>
                        </div>
                    </div>

                    <div className='row mb-2'>
                        <div className='col-6'>
                            <h3 className='cart__title'>Subtotal</h3>
                        </div>
                        <div className='col-6'>
                            <p className='cart__total'>
                                <span>₱</span> 0.00
                            </p>
                        </div>
                    </div>

                    <button className='btn btn--summarry mt-4'>
                        Proceed Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
