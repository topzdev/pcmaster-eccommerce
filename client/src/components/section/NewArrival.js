import React from "react";
import test_img from "../../resources/images/test-1.png";
import test_img2 from "../../resources/images/test-2.jpg";
import test_img3 from "../../resources/images/test-3.jpg";
import test_img4 from "../../resources/images/test-4.jpg";
import { Link } from "react-router-dom";
const NewArrival = () => {
    return (
        <section className='section section--primary'>
            <h1 className='heading--primary'>New Arrival</h1>
            <div className='row'>
                <div className='card card'>
                    <div className='card__main'>
                        <img className='card__img' src={test_img} alt='' />
                        <img className='card__b-img' src={test_img2} alt='' />

                        <Link to='\' className='card__cover'></Link>
                    </div>

                    <div className='card__body'>
                        <Link to='/' className='card__title'>
                            MSI MPG X570 GAMING EDGE WIFI
                        </Link>
                        <p className='card__price'>₱10,970.00</p>
                        <div className='card__btn'>
                            <button className='card__link'>
                                <span>
                                    <i className='fas fa-shopping-cart'></i>
                                </span>
                                <p>Add to cart</p>
                            </button>
                            <button className='card__link'>
                                <span>
                                    <i className='far fa-eye'></i>
                                </span>
                            </button>
                            <button className='card__link'>
                                <span>
                                    <i className='far fa-heart'></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrival;
