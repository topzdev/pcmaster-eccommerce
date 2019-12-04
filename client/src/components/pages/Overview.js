import React, { useEffect, Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageListView from "../layout/ImageListView";
import ProductTab from "../layout/productView/ProductTab";
import NumericField from "../layout/input/NumericField";
import Scroll from "react-scroll";
import numeral from "numeral";
import _ from "lodash";
import { connect } from "react-redux";
import validateDuplicate from "../../utils/validators";
import { searchProduct } from "../../controller/productController/productActions";
import ProductShowCase from "../layout/productView/ProductShowCase";
import DescriptionLoader from "../utils/loader/DescriptionLoader";
import HeaderChanger from "../utils/HeaderChanger";
import {
    addToCart,
    addWishlist
} from "../../controller/frontendController/frontendActions";

const ProductDetails = ({
    product: { current, loading },
    frontend: { cart, wishlist },
    searchProduct,
    addToCart,
    addWishlist
}) => {
    const { name } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [exist, setExist] = useState({ cart: false, wishlist: false });
    const [data, setData] = useState({
        _id: "",
        overview: "",
        description: [],
        tags: [],
        sku: "",
        price: "",
        quantity: "",
        subcategory: "",
        variety: "",
        category: "",
        brand: "",
        img: []
    });

    useEffect(() => {
        searchProduct({ name });
        Scroll.animateScroll.scrollToTop();
    }, [name]);

    useEffect(() => {
        if (current) setData(current);
    }, [current]);

    useEffect(() => {
        if (current)
            setExist({
                ...exist,
                ["cart"]: validateDuplicate(current._id, cart)
            });
    }, [cart, current]);

    return (
        <div className="container">
            <div className="details">
                <ImageListView
                    img={!_.isEmpty(data.img) && data.img}
                    loading={loading}
                />

                {loading ? (
                    <Fragment>
                        <div
                            className="details__description"
                            style={{ width: "100%" }}
                        >
                            <DescriptionLoader />
                        </div>
                    </Fragment>
                ) : (
                    <div className="details__description">
                        <HeaderChanger
                            name={name}
                            description={data.overview}
                            img={!_.isEmpty(data.img) && data.img.url}
                        />
                        <h1 className="details__title">{name && name}</h1>
                        <p className="details__price">
                            ₱
                            {data.price && numeral(data.price).format("0,0.00")}
                        </p>
                        <p className="details__overview mb-2">
                            {data.overview && data.overview}
                        </p>
                        <div className="details__main-btn">
                            <NumericField
                                initValue={quantity}
                                quantityValue={setQuantity}
                            />
                        </div>
                        {exist.cart ? (
                            <Link
                                to="/cart"
                                className="btn btn--primary btn--primary__added mt-2"
                            >
                                <span>
                                    <i className="fas fa-cart-arrow-down"></i>
                                </span>
                                Cart Added
                            </Link>
                        ) : (
                            <button
                                className="btn btn--primary mt-2"
                                onClick={() => addToCart(data, quantity)}
                            >
                                <span>
                                    <i className="fas fa-shopping-cart"></i>
                                </span>
                                Add to Cart
                            </button>
                        )}

                        <div className="details__btn">
                            {!exist.cart && (
                                <button
                                    className="btn btn--wishlist"
                                    onClick={() => addWishlist(data)}
                                >
                                    <span>
                                        <i className="far fa-heart"></i>
                                    </span>
                                    Add to Wishlist
                                </button>
                            )}
                            <button className="btn btn--wishlist">
                                <span>
                                    <i className="fas fa-random"></i>
                                </span>
                                Compare Product
                            </button>
                        </div>

                        <ul className="details__others">
                            <li>
                                <b>SKU: </b>
                                <Link to="/">{data.sku && data.sku}</Link>
                            </li>
                            <li>
                                <b>Category: </b>
                                <Link to="/">
                                    {data.category &&
                                        _.capitalize(data.category)}
                                </Link>
                                <Link to="/">
                                    {data.subcategory &&
                                        _.capitalize(data.subcategory)}
                                </Link>
                            </li>
                            <li>
                                <b>Tags: </b>
                                {data.tags &&
                                    data.tags.map((tag, idx) => (
                                        <Fragment key={idx}>
                                            <Link to="/">
                                                {_.capitalize(tag)}
                                            </Link>
                                        </Fragment>
                                    ))}
                            </li>
                            <li>
                                <b>Share: </b>
                                <Link to="/">
                                    <span>
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                </Link>{" "}
                                <Link to="/">
                                    <span>
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                </Link>{" "}
                                <Link to="/">
                                    <span>
                                        <i className="fab fa-pinterest"></i>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            {!loading && (
                <div className="details__tab">
                    <ProductTab description={data.description} />
                </div>
            )}

            <div className="row mb-2">
                <div className="col-12">
                    <ProductShowCase
                        query={{
                            category: data.category,
                            subcategory: data.subcategory,
                            variety: data.variety,
                            brand: data.brand
                        }}
                        exclude={data._id}
                        title={"Related"}
                    />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    product: state.product,
    frontend: state.frontend
});
export default connect(mapStateToProps, {
    searchProduct,
    addToCart,
    addWishlist
})(ProductDetails);
