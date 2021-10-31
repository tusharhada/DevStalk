import React from "react";
import { useLocation } from "react-router-dom";

const CategoriesData = [
  {
    id: "cat1",
    href: "/",
    value: "All",
  },
  {
    id: "cat2",
    href: "/web",
    value: "Web",
  },
  {
    id: "cat3",
    href: "/mobile",
    value: "Mobile",
  },
  {
    id: "cat4",
    href: "/animation",
    value: "Animation",
  },
  {
    id: "cat5",
    href: "/typography",
    value: "Typography",
  },
  {
    id: "cat6",
    href: "/illustration",
    value: "Illustration",
  },
  {
    id: "cat7",
    href: "/productivity",
    value: "Productivity",
  },
  {
    id: "cat8",
    href: "/graphic_design",
    value: "Graphic Design",
  },
];

const Category = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split();
  const l = splitLocation[splitLocation.length - 1];
  return (
    <li>
      <a
        className={`category ${props.href == l ? "active" : ""}`}
        href={props.href}
        onClick={() => props.filterHandler(props.value)}
      >
        {props.value}
      </a>
    </li>
  );
};

const Categories = ({ filterHandler }) => {
  return (
    <ul className="flex flex-row items-center justify-between">
      {CategoriesData.map((ref) => (
        <Category
          key={ref.id}
          href={ref.href}
          value={ref.value}
          filterHandler={filterHandler}
        />
      ))}
    </ul>
  );
};

export default Categories;
