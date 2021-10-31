import React from "react";

export default function UserDetails({ project }) {
  return (
    <div className="project-user_details">
      <div className="project-user_details__avatar">
        <div className="project-seprator "></div>
        <div className="project-user_details__img  u-margin-zero">
          <img src={project.logo} />
        </div>
        <div className="project-seprator"></div>
      </div>
      <a className="project-user_details__name" href="/">
        {project.creatorName} | {project.title}
      </a>
      <p className="project-user_details__tagline"></p>
      <button
        className="primary_button primary_button--dark u-margin-top-s"
        href="/"
      >
        Hire Me
      </button>
    </div>
  );
}
