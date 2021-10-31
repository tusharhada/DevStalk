import React from "react";
import { ReactComponent as Likes } from "images/likes.svg";
import { ReactComponent as Views } from "images/views.svg";
import ProjectImage from "images/TEMP/3e4c752580410a416015262510830a4c.webp";
import UserImage from "images/TEMP/temp2.jpg";

const Thumbnail = () => {
  return (
    <div className="card__thumbnail">
      <div className="card__thumbnail__placeholder">
        <img
          className="card__thumbnail__placeholder__img"
          src={ProjectImage}
          alt="temp"
        ></img>
      </div>
      <div className="card__thumbnail__overlay"></div>
    </div>
  );
};

const CardLazy = ({
  userName,
  userImage,
  projectPicture,
  projectTitle,
  projectId,
}) => {
  return (
    <li className="card">
      <a href="/shots/madhur">
        <Thumbnail />
        <div className="card__details">
          <div className="card__user-information">
            <img className="card__user-img" src={UserImage} alt="temp2"></img>
            <a className="card__user-name" href="/">
              Madhur Goyal
            </a>
          </div>
          <div className="card__statistic-container">
            <div className="card__statistic-container--item card__likes">
              <Likes />
              <span>200</span>
            </div>
            <div className="card__statistic-container--item card__views">
              <Views />
              <span>1000</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default CardLazy;
