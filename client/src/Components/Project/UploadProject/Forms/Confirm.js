import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { createProject } from "actions/projects";
import { ReactComponent as Illustration } from "images/undraw_Done_re_oak4.svg";

import { ReactComponent as GithubIcon } from "images/icons8-github.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube.svg";
import backButton from "images/backButton.png";
import linkIcon from "images/link.png";

export default function Confirm({ values, nextStep, prevStep }) {
  const {
    projectTitle: title,
    projectDescription: description,
    projectTagline: tagline,
    projectDomain: domain,
    projectTags: techStack,
    projectImages: images,
    projectLogo: logo,
    youtubeLink: video,
    githubLink: github,
    projectLink: website,
  } = values;
  const newValues = {
    title,
    description,
    tagline,
    domain,
    techStack,
    images,
    logo,
    video,
    github,
    website,
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleSubmit = async () => {
    console.log("hi");
    console.log(values);
    dispatch(
      createProject({ ...newValues, creatorName: user?.result?.name, history })
    );
    history.push("/");
  };
  return (
    <div className="project-form__modal">
      <p className="project-form__modal--back" onClick={prevStep}>
        <img src={backButton} alt="backButton" />
      </p>
      <div className="project-form__modal--heading">
        <h2>Review all the details</h2>
      </div>
      {/* <div className="project-form__modal--wrapper">
        <div className="project">
          <img src={values.projectLogo} alt="projectLogo"></img>
          <h1>{values.projectTitle}</h1>
          <span>{values.projectDomain}</span>
        </div>
        <h2>{values.projectTagline}</h2>
        <div>
          {values.projectImages.map((image) => {
            <img src={image} alt="projectImage" />;
          })}
        </div>
        <p>{values.projectTagline}</p>
        <div>
          {values.projectTags.map((tag) => {
            <span>{tag}</span>;
          })}
        </div>
        <div>
          <GithubIcon className="project-form__embed__icon" />
          <span>{values.githubLink}</span>
        </div>
        <div>
          <YoutubeIcon className="project-form__embed__icon" />
          <span>{values.youtubeLink}</span>
        </div>
        <div>
          <img
            src={linkIcon}
            alt="Project Link"
            className="project-form__embed__icon"
          />
          <span>{values.youtubeLink}</span>
        </div>
      </div> */}
      <div className="specialentry">
        <Illustration />
      </div>
      <button
        className="primary_button primary_button--dark"
        onClick={() => {
          handleSubmit();
        }}
      >
        Confirm Post
      </button>
    </div>
  );
}
