import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchCard from "../card/SearchCard";
import searchProduct from "../../../utils/searchProduct";
import Backdrop from "../../utils/Backdrop";
const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [products, setData] = useState(null);

    const onChange = e => {
        const searchString = e.target.value;
        setSearch(searchString);

        if (searchString !== "") {
            setTimeout(
                async () => setData(await searchProduct(searchString)),
                1000
            );
        }
    };

    const onExit = () => {
        setSearch("");
        setData(null);
    };

    return (
        <div className="search-field">
            <Backdrop show={!_.isEmpty(products)} zIndex="10" onHide={onExit} />
            <div className="inp--search">
                <input
                    className="inp"
                    type="text"
                    value={search}
                    placeholder="Search product"
                    onChange={onChange}
                />
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </div>
            {!_.isEmpty(products) && (
                <Fragment>
                    <div
                        className={`search-field__dropdown ${
                            !_.isEmpty(products) ? "search-field-expand" : ""
                        }`}
                    >
                        <p className="search-field__label">
                            Search Results for{" "}
                            {search && <span>"{search}"</span>}
                        </p>
                        {products.splice(0, 5).map(product => (
                            <SearchCard
                                key={product._id}
                                data={product}
                                onExit={onExit}
                            />
                        ))}

                        <Link
                            to={`/products/?search=${search}`}
                            className="search-field__view"
                            onClick={onExit}
                        >
                            View {products.length} more related on{" "}
                            <span>"{search}"</span>
                        </Link>
                    </div>
                </Fragment>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    product: state.product
});

export default SearchBar;
