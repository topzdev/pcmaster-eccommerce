import React, { Fragment } from "react";

const ProductDescription = ({ description }) => {
    return (
        <div className="details__tab--description">
            <div className="container pl-0">
                <div className="row">
                    <div className="col-12">
                        <h2>Description</h2>
                    </div>
                </div>
                {description &&
                    description.map((desc, idx) => (
                        <Fragment key={idx}>
                            <div className="row mt-1 mt-lg-0">
                                <div className="col-12 col-lg-4 mb-1 mb-lg-0">
                                    <h3>{desc.title}</h3>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <p>{desc.content}</p>
                                </div>
                            </div>
                        </Fragment>
                    ))}
            </div>
        </div>
    );
};

export default ProductDescription;
