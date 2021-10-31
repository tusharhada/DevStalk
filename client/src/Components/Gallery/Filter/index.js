import React, { useState } from "react";
import BtnDropdown from "./BtnDropdown";
import Categories from "./Categories";
import Settings from "./Settings";

const Filter = ({ category, filterHandler }) => {
  const [open, openFilters] = useState(false);
  const openFilterHandler = () => {
    openFilters(!open);
  };
  return (
    <div className="filter">
      <div className="filter__row ">
        <div className="filter__views">
          <BtnDropdown category={category} />
        </div>
        <div className="filter__categories" filterHandler={filterHandler}>
          <Categories />
        </div>
        {/* <div className="filter__settings">
          <Settings openFilterHandler={openFilterHandler} />
        </div> */}
      </div>
      {open ? (
        <div className="filter__row">
          <form className="filter__form"></form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
