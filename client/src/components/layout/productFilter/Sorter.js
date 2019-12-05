import React, { useState, useEffect } from "react";
import Select from "react-select";

const Sorter = ({ setView, view, setShow, show, setSort, sort }) => {
    let sortBy = [
        { value: "plf", label: "Price: Lowest First" },
        { value: "phf", label: "Price: Highest First" },
        { value: "pnaz", label: "Product Name: A to Z" },
        { value: "pnza", label: "Product Name: Z to A" },
        { value: "in", label: "In stocks" },
        { value: "rlf", label: "Reference: Lowest First" },
        { value: "rhf", label: "Reference: Highest First" }
    ];

    let showBy = [
        { value: 24, label: 24 },
        { value: 48, label: 48 },
        { value: 120, label: 120 }
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderColor: "rgb(249, 176, 6)",
            fontSize: "16px",
            fontWeight: 700
        })
    };

    return (
        <div className="search__sorter">
            {/* <div className='form-control'>
				<label htmlFor=''>Sort by</label>
				<div className='form-select'>
					<Select
						styles={customStyles}
						options={sortBy}
						value={sort}
						isSearchable={false}
						onChange={selected => setSort(selected.value)}
					/>
				</div>
			</div> */}
            <div className="form-control">
                <label htmlFor="">Show</label>
                <div className="form-select">
                    <Select
                        styles={customStyles}
                        options={showBy}
                        value={show}
                        isSearchable={false}
                        onChange={selected => setShow(selected.value)}
                    />
                </div>
            </div>
            <div className="form-control ml-auto">
                <label htmlFor="">View</label>
                <div>
                    <button
                        className={`btn btn--view ${view && "view-active"}`}
                        onClick={e => setView(true)}
                    >
                        <i className="fas fa-th-large"></i>
                    </button>
                    <button
                        className={`btn btn--view ${!view && "view-active"}`}
                        onClick={e => setView(false)}
                    >
                        <i className="fas fa-list"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sorter;
