import React from "react";
import { Link } from "react-router-dom";
const NetDeviceComponent = () => {
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
                        <p>Access Point/Range Extender</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Adaptor</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Router</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Switch</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>UTP Cable</p>
                    </Link>
                </li>
                <li className="menu__drp-item">
                    <Link to="/" className="menu__drp-link">
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>{" "}
                        <p>Network Attached Storage</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NetDeviceComponent;
