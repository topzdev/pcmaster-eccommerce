import React from "react";
import ban_1 from "../../resources/images/banner-1.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Banner = () => {
    return (
        <div className='banner'>
            <OwlCarousel
                className='banner__list'
                loop
                margin={0}
                nav
                items={1}
                autoplay={"true"}
                dot={"true"}
            >
                <li className='banner__item'>
                    <img src={ban_1} alt='Banner' />
                </li>
                <li className='banner__item'>
                    <img src={ban_1} alt='Banner' />
                </li>
            </OwlCarousel>
        </div>
    );
};

export default Banner;
