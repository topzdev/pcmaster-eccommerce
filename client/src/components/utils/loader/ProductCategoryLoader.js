import React from "react";
import CardLoader from "./CardLoader.js";
const ProductCategoryLoader = ({ view }) => {
    const renderCards = () => {
        let cards = [];
        for (let i = 0; i < 20; i++) {
            cards.push(
                <div
                    key={i}
                    className={`${
                        view ? "col-xl-3 col-lg-4 col-md-6 col-12" : "col-12"
                    } mb-3`}
                >
                    <CardLoader />
                </div>
            );
        }

        return cards;
    };
    return <div className="row mr-0">{renderCards()}</div>;
};

export default ProductCategoryLoader;
