import React, { Component } from "react";
import TagComponent from "./TagComponent";

export class FormProjectDetails extends Component {
  render() {
    const { values, handleChange, removeTag, nextStep } = this.props;
    console.log(values);
    const projectTitle = () => {
      return (
        <div className="project-form__title">
          <input
            type="text"
            name="projectTitle"
            id="projectTitle"
            value={values.projectTitle}
            onChange={handleChange("projectTitle")}
            placeholder="Give me a name"
          />
          <label htmlFor="projectTitle">Title</label>
        </div>
      );
    };
    const projectDescription = () => {
      return (
        <div className="project-form__description flex-basis_75">
          <textarea
            id="projectDescription"
            value={values.projectDescription}
            onChange={handleChange("projectDescription")}
            placeholder="Write what went into this project, and anything else you'd like to mention"
          ></textarea>
          <label htmlFor="projectDescription">Description</label>
        </div>
      );
    };
    const projectTags = () => {
      return (
        <div className="project-form__tag--inputArea  ">
          <input
            className="project-form__tag--input"
            type="text"
            name="projectTags"
            id="projectTags"
            placeholder="Tag your entry by comma"
            onChange={handleChange("projectTags")}
          />
          <div className="project-form__tag--container">
            {values.projectTags.map((tag) => (
              <TagComponent text={tag} key={tag} removeTag={removeTag} />
            ))}
          </div>
        </div>
      );
    };
    const projectTagline = () => {
      return (
        <div className="project-form__tagline u-margin-top-text-s">
          <input
            className="project-form__tagline--input"
            type="text"
            name="projectTagline"
            id="projectTagline"
            placeholder="Enter Tagline for your project."
            value={values.projectTagline}
            onChange={handleChange("projectTagline")}
          ></input>
          <label></label>
        </div>
      );
    };
    const projectDomain = () => {
      return (
        <div className="project-form__domain u-margin-bottom-text-xs">
          <input
            type="text"
            name="projectDomain"
            id="projectDomain"
            placeholder="Project Domain"
            value={values.projectDomain}
            className="project-form__domain--input"
            onChange={handleChange("projectDomain")}
          ></input>
          <label></label>
        </div>
      );
    };

    //Main Return
    return (
      <div className="project-form__modal">
        <div className="project-form__modal--heading">
          <h2>Upload your project.</h2>
        </div>
        <div className="project-form__modal--wrapper flex-col">
          <div className="flex flex-col justify-center ">
            {projectTitle()}
            {projectTagline()}
            <div className="flex flex-row justify-start u-margin-top-s">
              {projectDescription()}
              <div className="flex flex-col flex-basis_25 u-margin-left-s">
                {projectDomain()}
                {projectTags()}
              </div>
            </div>
          </div>
        </div>
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

export default FormProjectDetails;
