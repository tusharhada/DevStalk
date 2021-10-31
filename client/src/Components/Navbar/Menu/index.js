import React from "react";
import MenuData from "./MenuData";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="nav__menu">
      {MenuData.map((ref) => (
        <MenuItem
          key={ref.id}
          href={ref.href}
          value={ref.value}
          submenu={ref.submenu}
        />
      ))}
    </div>
  );
};

export default Menu;
