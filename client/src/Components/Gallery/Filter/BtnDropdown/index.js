import React, { useState, useEffect } from "react";
import { ReactComponent as Expand } from "images/expand.svg";

const SignedIn = true;

const Options = ({ option }) => {
  return (
    <div className="dropdown-btn__options">
      <ul>
        {SignedIn ? (
          <li
            id="following-btn"
            className={`${option === "following" ? "active" : ""}`}
          >
            <a href="/">Following</a>
          </li>
        ) : (
          ""
        )}
        <li
          id="popular-btn"
          className={`${option === "popular" ? "active" : ""}`}
        >
          <a href="/shots/popular">Popular</a>
        </li>
        <li
          id="recent-btn"
          className={`${option === "recent" ? "active" : ""}`}
        >
          <a href="/shots/recent">New & Noteworthy</a>
        </li>
      </ul>
    </div>
  );
};

const BtnDropdown = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(category);
  useEffect(() => {
    if (category === "following") {
      setOption("Following");
    } else if (category === "recent") {
      setOption("New & Noteworthy");
    } else {
      setOption("Popular");
    }
  }, [category]);
  return (
    <span className="dropdown-btn">
      <button
        href="#"
        className="dropdown-btn__link flex flex-row justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{option}</span>
        <Expand className="dropdown-btn__caret" />
      </button>
      {open && <Options option={category} />}
    </span>
  );
};

export default BtnDropdown;
