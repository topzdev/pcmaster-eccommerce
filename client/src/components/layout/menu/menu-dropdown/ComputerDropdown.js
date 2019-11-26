import React from "react";
import { Link } from "react-router-dom";
const ComputerDropdown = () => {
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
                        <p>Desktop PC</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Notebooks</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Mini PC</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Diskless PC</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Software</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ComputerDropdown;
