import React from "react";
import { Link } from "react-router-dom";
const AcessoriesDropdown = () => {
    return (
        <div className="menu__dropdown">
            <div className="menu__img-preview">
                <img src="" alt="" className="image" />
            </div>
            <ul className="menu__drp-group">
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Batteris and Chargers</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Cables</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Cooling Solutions</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Cleaning Solutions</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>HDD Dock / Enclosure / Caddy</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Lightings</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Memory Devices</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Sleeves / Bags</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>USB Hub / Card Reader</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AcessoriesDropdown;
