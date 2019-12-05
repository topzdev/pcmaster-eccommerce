import React from "react";
import ban_1 from "../../resources/images/banner-1.jpg";
import ban_2 from "../../resources/images/banner-8.jpg";
import ban_3 from "../../resources/images/banner-3.jpg";
import ban_4 from "../../resources/images/banner-4.jpg";
import ban_5 from "../../resources/images/banner-5.jpg";
import ban_6 from "../../resources/images/banner-6.jpg";
import ban_7 from "../../resources/images/banner-7.jpg";
import ban_8 from "../../resources/images/banner-8.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Banner = () => {
    return (
        <div className="carousel">
            <OwlCarousel
                className="carousel__list"
                loop={true}
                margin={0}
                nav
                items={1}
                autoplay={"true"}
                dot={"true"}
                animateOut={"fadeOut"}
                animateIn={"fadeIn"}
                autoplayTimeout={5000}
                mouseDrag={true}
                navClass={[
                    "nav-carousel nav-banner-left",
                    "nav-carousel nav-banner-right"
                ]}
                autoHeightClass={true}
            >
                <li className="carousel__item">
                    <img src={ban_2} alt="carousel" draggable={false} />
                </li>
                <li className="carousel__item">
                    <img src={ban_3} alt="carousel" draggable={false} />
                </li>
                <li className="carousel__item">
                    <img src={ban_4} alt="carousel" draggable={false} />
                </li>
                <li className="carousel__item">
                    <img src={ban_5} alt="carousel" draggable={false} />
                </li>
                <li className="carousel__item">
                    <img src={ban_6} alt="carousel" draggable={false} />
                </li>
                <li className="carousel__item">
                    <img src={ban_7} alt="carousel" draggable={false} />
                </li>
                <li className="carousel__item">
                    <img src={ban_8} alt="carousel" draggable={false} />
                </li>
            </OwlCarousel>
        </div>
    );
};

export default Banner;
