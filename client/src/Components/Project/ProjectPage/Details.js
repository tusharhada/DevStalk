import React from "react";
import { ReactComponent as GithubIcon } from "images/icons8-github.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube.svg";

export default function Details({ project }) {
  return (
    <div className="project-details flex flex-row justify-between">
      <div className="flex-grow">
        <h2 className="project-details__tagline ">{project.tagline}</h2>
        <h3 className="project-details__description ">{project.description}</h3>
      </div>
      <div className="flex items-center">
        <button
          href={`https://${project.github}`}
          className="primary_button primary_button--light project-details__embed__button"
        >
          <GithubIcon />
        </button>
        <button
          href={`https://${project.youtube}`}
          className="primary_button primary_button--light project-details__embed__button"
        >
          <YoutubeIcon />
        </button>
      </div>
    </div>
  );
}
