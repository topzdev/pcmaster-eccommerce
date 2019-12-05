import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        setAdmin(window.location.pathname.toString().includes("admin"));
    }, [admin]);

    if (!admin) {
        return (
            <footer className="footer">
                <div className="footer__subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 mb-lg-0 mb-1">
                                <h1 className="mb-1">
                                    Sign up for newsletter📰🎉
                                </h1>
                                <p>
                                    Get news about latest tech out in market and
                                    more just to be updated in tech world!
                                </p>
                            </div>
                            <div className="col-lg-6 col-12">
                                <input
                                    type="text"
                                    className="inp inp--subcribe"
                                    placeholder="Enter your email address here"
                                />
                                <button className="btn btn--subcribe">
                                    Sumbit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="footer__main">
                        <div className="row">
                            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                                <ul className="footer__info">
                                    <li>
                                        <h3>Store Information</h3>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-location-arrow"></i>
                                        </span>
                                        <p>
                                            1320 A 48 Cp Garcia St Tondo, Manila
                                            Philippines
                                        </p>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-phone-alt"></i>
                                        </span>
                                        <p>
                                            255-9069 <br />
                                            945-4995
                                        </p>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-mobile-alt"></i>
                                        </span>
                                        <p>0928665903</p>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-clock"></i>
                                        </span>
                                        <p>
                                            Mon-Sat: 9AM to 7PM <br />
                                            Sun: 9AM to 5PM
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2 mb-3 mb-lg-0">
                                <ul className="footer__list">
                                    <li>
                                        <h3>Navigation</h3>
                                    </li>
                                    <li>
                                        <Link to="">Components</Link>
                                    </li>
                                    <li>
                                        <Link to="">Computers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Peripherals</Link>
                                    </li>
                                    <li>
                                        <Link to="">Net Devices</Link>
                                    </li>
                                    <li>
                                        <Link to="">Accessories</Link>
                                    </li>
                                    <li>
                                        <Link to="">Gadgets</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-6  col-lg-2 mb-3 mb-lg-0">
                                <ul className="footer__list">
                                    <li>
                                        <h3>Customer</h3>
                                    </li>
                                    <li>
                                        <Link to="">Buyer</Link>
                                    </li>
                                    <li>
                                        <Link to="">Suplier</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-6 col-lg-2 mb-3 mb-lg-0">
                                <ul className="footer__list">
                                    <li>
                                        <h3>Company</h3>
                                    </li>
                                    <li>
                                        <Link to="">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="">Carrers</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-6  col-lg-3 mb-3 mb-lg-0">
                                <ul className="footer__list">
                                    <li>
                                        <h3>Further Information</h3>
                                    </li>
                                    <li>
                                        <Link to="">Terms and Condition</Link>
                                    </li>
                                    <li>
                                        <Link to="">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="">Laws</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="footer__copyright">
                                    {"Copyright © "}
                                    <a href="https://topzthedev.github.io/portfolio/">
                                        PC Master
                                    </a>{" "}
                                    all right reserved{" "}
                                    {new Date().getFullYear()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } else {
        return <Fragment></Fragment>;
    }
};

export default Footer;
