import React from "react";
import NoResultImage from "images/noresults.png";

export default function NoResults({ searchValue }) {
  return (
    <div className="noresult">
      <img
        className="noresult__illustration"
        src={NoResultImage}
        alt="Nothing to show here"
      />
      <h3 className="noresult__heading">
        Sorry we couldn't find any match for <span>{searchValue}</span>
      </h3>
      <p className="noresult__heading2">Please try again with another term</p>
    </div>
  );
}
