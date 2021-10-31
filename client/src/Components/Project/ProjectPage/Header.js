import React from "react";
import { useDispatch } from "react-redux";
import { likeProject } from "actions/projects";

import { ReactComponent as Likes } from "images/likes.svg";

const UserDetails = ({ userName, teamName }) => {
  const Team = false;
  if (Team) {
    return (
      <div className="project__user__details">
        <a href="/">{userName}</a>" for "<a href="/">{teamName}</a>
      </div>
    );
  } else {
    return (
      <div className="project__user__details">
        <a href="/">{userName}</a>
      </div>
    );
  }
};

const FollowPrompt = () => {
  const follow = true;
  return (
    <div className="follow__prompt">
      {follow ? <a href="/">Follow</a> : <a href="/">Following</a>}
    </div>
  );
};

const UserContainer = ({ project }) => {
  return (
    <div className="project-header__user">
      <div className="project-header__logo">
        <img src={project.logo} alt="project logo"></img>
      </div>
      <div className="project-header__details">
        <div className="flex flex-row items-center">
          <a
            href={`https://${project.website}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 className="project-header__title">{project.title}</h1>
          </a>
          <div className="project-header__domain">
            <h3>{project.domain}</h3>
          </div>
        </div>

        <div className="project-header__author">
          <UserDetails userName={project.creatorName} />
          <span>|</span>
          <FollowPrompt />
        </div>
      </div>
    </div>
  );
};

const HeaderActions = ({ projectId, projectLikes }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const checkLikeStatus = () => {
    return (
      projectLikes?.length > 0 &&
      projectLikes?.find((like) => like === user?.result?._id)
    );
  };
  return (
    <div className="project-header__actions">
      <button
        onClick={() => {
          dispatch(likeProject(projectId));
        }}
        className="primary_button primary_button--light project-header__actions__button"
      >
        <Likes
          className={`project-header__button__svg ${
            checkLikeStatus() ? "project-header__button__svg--liked" : ""
          }`}
        />
        <span>{checkLikeStatus() ? projectLikes.length : "Like"}</span>
      </button>
    </div>
  );
};

const Header = ({ project }) => {
  return (
    <div className="project-header">
      <UserContainer project={project} />
      <HeaderActions projectLikes={project.likes} projectId={project._id} />
    </div>
  );
};

export default Header;
