import React from "react";
import { ReactComponent as Filter } from "images/filter.svg";

const Settings = (props) => {
  return (
    <button
      className="filter__settings__toggle flex flex-row items-center"
      onClick={props.openFilterHandler}
    >
      <Filter className="filter__settings__toggle-icon" />
      <span>Filters</span>
    </button>
  );
};

export default Settings;
