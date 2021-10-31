import React from "react";
import { Link } from "react-router-dom";

const UserData = [
  {
    userName: "madhur1999",
    fullName: "Ujjwal Goyal",
    avatar: "https://picsum.photos/id/237/36/36",
    profileLink: "madhur1999",
  },
];

const UserMenu = ({ userInformation, logoutHandler }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className="nav__el user">
      <Link className="user__avatar" to={`/profile/${user.result._id}`}>
        <img
          className="user__img"
          src={UserData[0].avatar}
          alt={UserData[0].fullName}
        ></img>
      </Link>
      <div className="dropdown">
        <Link to={`/profile/${user.result._id}`} className="dropdown__el">
          <span className="dropdown__text">Profile</span>
        </Link>
        <Link
          to={{ pathname: "http://127.0.0.1:5500" }}
          target="_blank"
          className="dropdown__el"
        >
          <span className="dropdown__text">Portfolio</span>
        </Link>
        {/* <div className="dropdown__seprator"></div>
        <Link to="/account/profile" className="dropdown__el">
          <span className="dropdown__text">Edit Profile</span>
        </Link>
        <Link to="/" className="dropdown__el">
          <span className="dropdown__text">Edit Preferences</span>
        </Link> */}
        <div className="dropdown__seprator"></div>
        <Link
          to={`/profile/${user.result._id}/liked_projects`}
          className="dropdown__el"
        >
          <div className="dropdown__icon"></div>
          <span className="dropdown__text">My Likes</span>
        </Link>
        <Link
          to={`/profile/${user.result._id}/collections`}
          className="dropdown__el"
        >
          <div className="dropdown__icon"></div>
          <span className="dropdown__text">My Collections</span>
        </Link>
        <Link
          to={`/profile/${user.result._id}/projects`}
          className="dropdown__el"
        >
          <div className="dropdown__icon"></div>
          <span className="dropdown__text">My Projects</span>
        </Link>
        <div className="dropdown__seprator"></div>
        {/* <Link to="/account" className="dropdown__el">
          <span className="dropdown__text">Account Settings</span>
        </Link> */}
        <Link to="/" className="dropdown__el" onClick={logoutHandler}>
          <span className="dropdown__text">Sign out</span>
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
