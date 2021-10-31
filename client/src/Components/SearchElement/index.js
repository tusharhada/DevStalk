import React, { useState } from "react";
import { PreMainBody } from "Components/Utilities/BodyType";

export default function SearchElement({
  searchProject,
  handleChange,
  totalResults,
}) {
  const [value, setValue] = useState("");
  return (
    <PreMainBody className="u-margin-top-m flex flex-col items-center ">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find Projects, Designs, Trends and more..."
          className="search-bar__input"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setValue(e.target.value);
              searchProject();
            }
          }}
          onChange={handleChange}
        ></input>
        <button className="search-bar__button" onSubmit={searchProject}>
          Search
        </button>
        <label></label>
      </div>
      <h2 className="search-bar__heading u-margin-top-s">{value}</h2>
      <p className="search-bar__results ">
        {totalResults} <span>{value}</span>{" "}
        {totalResults === 1 ? "project" : "projects"} found
      </p>
    </PreMainBody>
  );
}
