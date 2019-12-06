import React from "react";
import { Link } from "react-router-dom";
import WishlistCard from "../layout/card/WishlistCard";
import { connect } from "react-redux";
import HeaderChanger from "../utils/HeaderChanger";
const Wishlist = ({ frontend: { wishlist } }) => {
    return (
        <div className="container pb-3">
            <HeaderChanger
                name={`Wishlist (${wishlist.length}) `}
                description={
                    "When you want to get product soon, add it to wishlist."
                }
            />
            <div className="wishlist ">
                <h1 className="heading--primary mb-2">Wishlist</h1>
                <div className="row pr-1">
                    <div className="col-12">
                        {wishlist &&
                            wishlist.map(item => (
                                <WishlistCard key={item.id} data={item} />
                            ))}
                    </div>
                </div>
                <Link to="/" className="btn btn--more mt-2">
                    <span>&#8636; </span> Continue Shopping
                </Link>
            </div>
        </div>
    );
};
const mapStateToProps = state => ({
    frontend: state.frontend
});
export default connect(mapStateToProps)(Wishlist);
