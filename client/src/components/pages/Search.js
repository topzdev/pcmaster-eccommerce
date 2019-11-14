import React from "react";
import Select from "react-select";

import CardProduct from "../layout/card/CardProduct";
import Filter from "../layout/search/Filter";
import Sorter from "../layout/search/Sorter";

const Search = () => {
  return (
    <div className="container">
      <div className="search">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-9">
            <div className="search__result">
              <div className="row">
                <div className="col-12">
                  <div className="search__string">
                    Searched for <span>"MSI"</span>
                    <p>97 results have been found.</p>
                  </div>

                  <Sorter />
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <CardProduct />
                </div>
                <div className="col-4">
                  <CardProduct />
                </div>
                <div className="col-4">
                  <CardProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
