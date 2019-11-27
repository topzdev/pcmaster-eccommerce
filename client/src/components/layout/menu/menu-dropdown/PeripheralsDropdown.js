import React from "react";
import { Link } from "react-router-dom";
const PeripheralsDropdown = () => {
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
                        <p>Displays</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Audio</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Keyboard/Mouse</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Office Furniture</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Printer/Scanner/Inks</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Surveillance/CCTV</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>UPS/AVR</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Webcam</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default PeripheralsDropdown;
