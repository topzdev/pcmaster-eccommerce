import React, { useEffect, useState, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../resources/images/pc-master-logo.png";
import logo_mb from "../../resources/images/pc-master-mb.png";
import MenuBar from "./menu/MenuBar";
import SearchBar from "./search/SearchBar";
import { toggleNav } from "../../controller/frontendController/frontendActions";
import { connect } from "react-redux";
const Navbar = ({ frontend: { cart, wishlist }, toggleNav }) => {
    const [scroll, setScroll] = useState({
        prevScrollPos: window.pageYOffset,
        visible: true,
        hidden: false
    });

    const handleScroll = () => {
        const { prevScrollPos } = scroll;
        const currentScrollPos = window.pageYOffset;
        let visible = prevScrollPos > currentScrollPos;

        if (currentScrollPos < 30) visible = true;

        setScroll({
            prevScrollPos: currentScrollPos,
            visible
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <nav className={`navbar ${scroll.visible ? "" : "navbar-fixed"}`}>
                <div className="navbar__nav">
                    <button className="navbar__button" onClick={toggleNav}>
                        <span></span>
                    </button>
                    <Link to="/" className="navbar__brand">
                        <img
                            src={logo}
                            alt="PC Master Logo"
                            className="navbar__logo"
                        />
                    </Link>
                    <div className="navbar__search">
                        <SearchBar />
                    </div>
                    <li className="navbar__list">
                        <NavLink className="btn btn--icon" to="/wishlist">
                            <span className="badge badge--primary">
                                {wishlist && wishlist.length}
                            </span>
                            <i className="far fa-heart"></i>
                        </NavLink>
                        <NavLink className="btn btn--icon" to="/cart">
                            <span className="badge badge--primary">
                                {cart && cart.length}
                            </span>
                            <i className="fas fa-shopping-cart"></i>
                        </NavLink>
                    </li>
                </div>
                <MenuBar />
            </nav>
        </Fragment>
    );
};
const mapStateToProps = state => ({
    frontend: state.frontend
});
export default connect(mapStateToProps, { toggleNav })(Navbar);
