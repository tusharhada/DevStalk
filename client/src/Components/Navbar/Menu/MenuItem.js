import React, { useState } from "react";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <div className="nav__menu__item">
      <Link to={props.href}>
        <h3 className="nav__menu__item__link">{props.value}</h3>
      </Link>
      {props.submenu ? <SubMenu submenu={props.submenu} /> : ""}
    </div>
  );
};

export default MenuItem;
