import React from "react";
import StarRatingComponent from "react-star-rating-component";

import Comment from "../../card/Comment";
const ProductReview = () => {
    return (
        <div className="container">
            <div className="row">
                <h2>Reviews</h2>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 pl-0 mb-2 mb-lg-0">
                    <div className="rating__overall">
                        <h4>Overall Rating</h4>
                        <h1>4.5/5</h1>
                        <div className="rating__stars">
                            <StarRatingComponent
                                name="rate"
                                editing={false}
                                renderStarIcon={() => (
                                    <i className="fas fa-star"></i>
                                )}
                                renderStarIconHalf={() => (
                                    <i className="fas fa-star-half-alt"></i>
                                )}
                                starCount={5}
                                value={4.5}
                            />
                        </div>
                        <p className="rating__count">6</p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-2 mb-lg-0 pl-0 pl-md-2">
                    <div className="rating__breakdown">
                        <h4>Rating Breakdown</h4>
                        <ul className="rating__group mt-2">
                            <li className="rating__list">
                                <p>
                                    5{" "}
                                    <span>
                                        {" "}
                                        <i className="fas fa-star"></i>
                                    </span>
                                </p>
                                <div className="rating__percent">
                                    <span></span>
                                </div>
                                <p className="rating__count">5</p>
                            </li>
                            <li className="rating__list">
                                <p>
                                    4{" "}
                                    <span>
                                        {" "}
                                        <i className="fas fa-star"></i>
                                    </span>
                                </p>
                                <div className="rating__percent">
                                    <span></span>
                                </div>
                                <p className="rating__count">1</p>
                            </li>
                            <li className="rating__list">
                                <p>
                                    3{" "}
                                    <span>
                                        {" "}
                                        <i className="fas fa-star"></i>
                                    </span>
                                </p>
                                <div className="rating__percent">
                                    <span></span>
                                </div>
                                <p className="rating__count">0</p>
                            </li>
                            <li className="rating__list">
                                <p>
                                    2{" "}
                                    <span>
                                        {" "}
                                        <i className="fas fa-star"></i>
                                    </span>
                                </p>
                                <div className="rating__percent">
                                    <span></span>
                                </div>
                                <p className="rating__count">0</p>
                            </li>
                            <li className="rating__list">
                                <p>
                                    1{" "}
                                    <span>
                                        {" "}
                                        <i className="fas fa-star"></i>
                                    </span>
                                </p>
                                <div className="rating__percent">
                                    <span></span>
                                </div>
                                <p className="rating__count">0</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-5 pl-0 pl-lg-2">
                    <div className="rating__helpful">
                        <h4 className="mb-1">Most Helpful Reviews</h4>
                        <Comment />
                    </div>
                </div>
            </div>
            <div className="row mt-3 mb-2">
                <h4>Comments</h4>
            </div>
            <div className="row">
                <Comment />
            </div>
        </div>
    );
};

export default ProductReview;
