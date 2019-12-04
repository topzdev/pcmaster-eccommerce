import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import truncate from "cli-truncate";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import validateDuplicate from "../../../utils/validators";
import {
    addToCart,
    addWishlist
} from "../../../controller/frontendController/frontendActions";
import { connect } from "react-redux";
const CardProduct = ({
    frontend: { cart, wishlist },
    size,
    data,
    addToCart,
    addWishlist
}) => {
    const [show, setShow] = useState(false);
    const [cartExist, setCartExist] = useState(false);
    const [wishExist, setWishExist] = useState(false);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const { _id, name, overview, price, img } = data;

    useEffect(() => setCartExist(validateDuplicate(_id, cart)), [cart]);
    useEffect(() => setWishExist(validateDuplicate(_id, wishlist)), [wishlist]);

    const onAddCart = useCallback(() => addToCart(data, 1), [cart]);
    const onAddWishlist = useCallback(() => addWishlist(data), [wishlist]);

    const renderWishlist = added => {
        if (!added)
            return (
                <button
                    className="card--primary__link"
                    onClick={() => onAddWishlist()}
                >
                    <span>
                        <i className="far fa-heart"></i>
                    </span>
                </button>
            );
        else
            return (
                <Link
                    to="/wishlist"
                    className="card--primary__link card--primary__added"
                >
                    <span>
                        <i class="fas fa-heart"></i>
                    </span>
                </Link>
            );
    };

    return (
        <div
            className={`card--primary ${size} ${
                img[1] ? "" : "card--primary__disabled"
            }`}
            onMouseEnter={() => setShow(true)}
        >
            {console.log(data)}
            <div className="card--primary__main">
                <Image
                    className="card--primary__img"
                    publicId={img ? img[0].public_id : ""}
                >
                    {" "}
                    <Transformation quality="auto:low" />
                </Image>
                <Image
                    className="card--primary__b-img"
                    publicId={show && img[1] ? img[1].public_id : ""}
                >
                    <Transformation quality="auto:low" />
                </Image>

                <Link
                    to={`/overview/${name}`}
                    className="card--primary__cover"
                ></Link>
            </div>

            <div className="card--primary__body">
                <Link to={`/overview/${name}`} className="card--primary__title">
                    {truncate(name, 50, { position: "end" })}
                </Link>
                <p className="card--primary__price">
                    {"₱" + numeral(price).format("0,0.00")}
                </p>
                <div className="card--primary__description">
                    {truncate(overview, 300, { position: "end" })}
                </div>
                <div className="card--primary__btn">
                    {cartExist ? (
                        <Link
                            to="/cart"
                            className="card--primary__link card--primary__added"
                        >
                            <span>
                                <i className="fas fa-cart-arrow-down"></i>
                            </span>
                            <p>Cart Added</p>
                        </Link>
                    ) : (
                        <button
                            className="card--primary__link"
                            onClick={() => onAddCart()}
                        >
                            <span>
                                <i className="fas fa-shopping-cart"></i>
                            </span>
                            <p>Add to cart</p>
                        </button>
                    )}

                    {!cartExist && renderWishlist(wishExist)}
                    <button className="card--primary__link">
                        <span>
                            <i className="far fa-eye"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    frontend: state.frontend
});

export default connect(mapStateToProps, { addToCart, addWishlist })(
    CardProduct
);
