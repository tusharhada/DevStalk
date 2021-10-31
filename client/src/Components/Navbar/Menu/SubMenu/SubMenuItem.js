import React from "react";
import { ReactComponent as RightArrow } from "images/arrow-forward-outline.svg";
import { Link } from "react-router-dom";

const SubMenuItem = (props) => {
  return (
    <Link className="nav__submenu__item" to={props.href}>
      <div className="nav__submenu__item__text">
        <h4 className="nav__submenu__item__heading">{props.head}</h4>
        <p className="nav__submenu__item__description">{props.sub_head}</p>
      </div>
      <div className="nav__submenu__item__arrow">
        <RightArrow />
      </div>
    </Link>
  );
};

export default SubMenuItem;
