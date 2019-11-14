import React, { useState, useEffect } from "react";
import Select from "react-select";

const Sorter = () => {
  let sortBy = [
    { value: "plf", label: "Price: Lowest First" },
    { value: "phf", label: "Price: Highest First" },
    { value: "pnaz", label: "Product Name: A to Z" },
    { value: "pnza", label: "Product Name: Z to A" },
    { value: "in", label: "In stocks" },
    { value: "rlf", label: "Reference: Lowest First" },
    { value: "rhf", label: "Reference: Highest First" }
  ];

  let show = [
    { value: "24", label: "24" },
    { value: "48", label: "48" },
    { value: "120", label: "120" }
  ];

  let viewMode = true;

  const [view, setView] = useState(true);

  useEffect(() => {
    alert("Hello");
  }, [view]);

  return (
    <div className="search__sorter">
      <div className="form-control">
        <label htmlFor="">Sort by</label>
        <div className="form-select">
          <Select option={sortBy} />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="">Show</label>
        <div className="form-select">
          <Select option={show} />
        </div>
      </div>
      <div className="form-control ml-auto">
        <label htmlFor="">View</label>
        <button
          className={`btn btn--view ${view && "view-active"}`}
          onClick={e => setView(true)}
        >
          <i className="fas fa-list"></i>
        </button>
        <div
          className={`btn btn--view ${!view && "view-active"}`}
          onClick={e => setView(false)}
        >
          <i className="fas fa-th-large"></i>
        </div>
      </div>
    </div>
  );
};

export default Sorter;
