import React from "react";
import { Link } from "react-router-dom";
const BackButton = () => {
    return (
        <Link to={`/overview/${cart.name}`} className="btn btn--more">
            <span>&#8636; </span> Continue Shopping
        </Link>
    );
};

export default BackButton;
