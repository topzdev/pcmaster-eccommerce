import React from "react";
import { Link } from "react-router-dom";
const GadgetsDropdown = () => {
    return (
        <div className="menu__dropdown">
            <div className="menu__img-preview">
                <img src="" alt="" className="image" />
            </div>
            <ul className="menu__drp-group">
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Digital Camera</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Media Player</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Mobile</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Mobile Accessories</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Mining</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i className="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Wellness</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default GadgetsDropdown;
