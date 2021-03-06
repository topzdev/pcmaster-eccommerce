import React, { useEffect, Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageListView from "../layout/ImageListView";
import ProductTab from "../layout/productView/ProductTab";
import NumericField from "../layout/input/NumericField";
import Scroll from "react-scroll";
import numeral from "numeral";
import _ from "lodash";
import truncate from "cli-truncate";
import { connect } from "react-redux";
import validateDuplicate from "../../utils/validators";
import { searchProduct } from "../../controller/productController/productActions";
import ProductShowCase from "../layout/productView/ProductShowCase";
import DescriptionLoader from "../utils/loader/DescriptionLoader";
import HeaderChanger from "../utils/HeaderChanger";
import { FacebookShareButton } from "react-share";
import {
  addToCart,
  addWishlist,
} from "../../controller/frontendController/frontendActions";

const ProductDetails = ({
  product: { current, loading },
  frontend: { cart, wishlist },
  searchProduct,
  addToCart,
  addWishlist,
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
    img: [],
  });

  const [cartExist, setCartExist] = useState(false);
  const [wishExist, setWishExist] = useState(false);
  useEffect(() => setCartExist(validateDuplicate(data._id, cart)), [cart]);
  useEffect(() => setWishExist(validateDuplicate(data._id, wishlist)), [
    wishlist,
  ]);

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
        ["cart"]: validateDuplicate(current._id, cart),
      });
  }, [cart, current]);

  const isWishlist = () => {
    if (wishExist) {
      return (
        <Link
          to="/cart"
          className="btn btn--wishlist btn--wishlist--added mb-1"
        >
          <span>
            <i className="fas fa-heart"></i>
          </span>
          Added as Wishlist
        </Link>
      );
    } else {
      return (
        <button
          className="btn btn--wishlist mb-1"
          onClick={() => addWishlist(data)}
        >
          <span>
            <i className="far fa-heart"></i>
          </span>
          Add to Wishlist
        </button>
      );
    }
  };

  return (
    <div className="container pb-3">
      <div className="details">
        <ImageListView
          img={!_.isEmpty(data.img) && data.img}
          loading={loading}
        />

        {loading ? (
          <Fragment>
            <div className="details__description" style={{ width: "100%" }}>
              <DescriptionLoader />
            </div>
          </Fragment>
        ) : (
          <div className="details__description">
            <HeaderChanger
              name={name}
              description={data.overview}
              img={!_.isEmpty(data.img) && data.img[0].url}
            />
            <h1 className="details__title">{name && name}</h1>
            <p className="details__price">
              ₱{data.price && numeral(data.price).format("0,0.00")}
            </p>
            <p className="details__overview mb-2">
              {data.overview &&
                truncate(data.overview, 400, {
                  position: "end",
                })}
            </p>
            <div className="details__main-btn">
              <NumericField initValue={quantity} quantityValue={setQuantity} />
            </div>
            {exist.cart ? (
              <Link
                to="/wishlist"
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
              {!cartExist && isWishlist()}
              <button className="btn btn--wishlist">
                <span>
                  <i className="fas fa-random"></i>
                </span>
                Compare Product
              </button>
            </div>

            <ul className="details__others mb-2">
              <li>
                <b>SKU: </b>
                <Link to="/">{data.sku && data.sku}</Link>
              </li>
              <li>
                <b>Category: </b>
                <Link to="/">
                  {data.category && _.capitalize(data.category)}
                </Link>
                <Link to="/">
                  {data.subcategory && _.capitalize(data.subcategory)}
                </Link>
              </li>
              <li>
                <b>Tags: </b>
                {data.tags &&
                  data.tags.map((tag, idx) => (
                    <Fragment key={idx}>
                      <Link to="/">{_.capitalize(tag)}</Link>
                    </Fragment>
                  ))}
              </li>
              <FacebookShareButton url={window.location.href} />
              <li>
                <b>Share: </b>
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  className="fb-xfbml-parse-ignore"
                >
                  <span>
                    <i className="fab fa-facebook"></i>
                  </span>
                </a>

                <a
                  target="_blank"
                  href={`https://twitter.com/intent/tweet?text=${name +
                    " |buy now at PC Master | Home of the Glorious PC Builder and Gamers"}`}
                >
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                </a>
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
      <div className="container">
        <ProductShowCase
          query={{
            category: data.category,
            subcategory: data.subcategory,
            variety: data.variety,
            brand: data.brand,
          }}
          exclude={data._id}
          title={"Related"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
  frontend: state.frontend,
});
export default connect(mapStateToProps, {
  searchProduct,
  addToCart,
  addWishlist,
})(ProductDetails);
