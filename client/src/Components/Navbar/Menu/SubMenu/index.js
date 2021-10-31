import React from "react";
import SubMenuItem from "./SubMenuItem";

const SubMenu = (props) => {
  return (
    <div className="nav__submenu">
      {props.submenu.map((ref) => (
        <SubMenuItem
          key={ref.id}
          href={ref.href}
          head={ref.head}
          sub_head={ref.sub_head}
        />
      ))}
    </div>
  );
};

export default SubMenu;
