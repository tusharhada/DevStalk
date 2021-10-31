import React, { Component } from "react";
import { ReactComponent as Illustration } from "images/connectYourProject.svg";
import backButton from "images/backButton.png";
import { ReactComponent as GithubIcon } from "images/icons8-github.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube.svg";
import linkIcon from "images/link.png";

export class FormEmbedLink extends Component {
  render() {
    const { values, handleChange, nextStep, prevStep } = this.props;
    return (
      <div className="project-form__modal">
        {/* Heading and Back */}
        <p className="project-form__modal--back" onClick={prevStep}>
          <img src={backButton} alt="backButton" />
        </p>
        <h2 className="project-form__modal--heading">
          Connect to your project.
        </h2>

        {/* Main Wrappper */}
        <div className="project-form__modal--wrapper flex-row">
          <div className="project-form__embed flex flex-col flex-basis__half justify-center ">
            <div className="project-form__embed__container flex flex-row items-center ">
              <GithubIcon className="project-form__embed__icon" />
              <input
                id="github"
                type="link"
                placeholder="Enter your github project link"
                label="GitHub Link"
                value={values.githubLink}
                onChange={handleChange("githubLink")}
                className="project-form__embed__input"
              />
            </div>
            <div className="project-form__embed__container flex flex-row items-center ">
              <YoutubeIcon className="project-form__embed__icon" />
              <input
                id="youtube"
                type="link"
                placeholder="Enter link for project youtube video"
                label="Youtube Video Link"
                value={values.youtubeLink}
                onChange={handleChange("youtubeLink")}
                className="project-form__embed__input"
              />
            </div>
            <div className="project-form__embed__container flex flex-row items-center ">
              <img
                src={linkIcon}
                alt="Project Link"
                className="project-form__embed__icon"
              />
              <input
                id="projectMain"
                type="link"
                placeholder="Link to your project website"
                label="Project Link"
                value={values.projectLink}
                onChange={handleChange("projectLink")}
                className="project-form__embed__input"
              />
            </div>
          </div>
          <div className="flex flex-row flex-basis__half items-center justify-center">
            <Illustration className="project-form__illustration" />
          </div>
        </div>

        {/* Buttons */}
        <div className="project-form__modal--button">
          <button
            className="primary_button primary_button--dark"
            onClick={nextStep}
          >
            Continue{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default FormEmbedLink;
