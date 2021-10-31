import React from "react";

export const MainBody = (props) => {
  return (
    <div className={`wrap ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export const SubBody = (props) => {
  return (
    <div className={`wrap--inner ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export const PreMainBody = (props) => {
  return (
    <div className={`pre--wrap ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};
