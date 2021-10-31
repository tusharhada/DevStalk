import React, { Component } from "react";
import backButton from "images/backButton.png";
import tapGIF from "images/tap.gif";

export class FormMedia extends Component {
  mediaSkel = (value) => {
    if (!value) {
      return (
        <div className="project-form__media--files__file dashed-border"></div>
      );
    } else {
      return (
        <div className="project-form__media--files__file">
          <img src={value} alt=""></img>
        </div>
      );
    }
  };
  render() {
    const { nextStep, prevStep, handleChange, values, removeLogo } = this.props;
    let start = 0;
    const createElements = () => {
      var elements = [];
      let i = start;
      for (; i < values.projectImages.length; i++) {
        elements.push(this.mediaSkel(values.projectImages[i]));
      }
      for (; i < 4; i++) {
        elements.push(this.mediaSkel(null));
      }

      return elements;
    };

    const projectLogoInput = () => {
      return (
        <div className="project-form__logo flex flex-row items-center">
          <div className="project-form__logo--area flex flex-row items-center justify-center">
            <input
              id="project-form__logo--area-field"
              type="file"
              accept="image/*"
              className="project-form__logo--area-field"
              onChange={handleChange("projectLogo")}
            ></input>
            {values.projectLogo ? (
              <img
                className="project-form__logo--image"
                src={values.projectLogo}
                alt="projectLogo"
              ></img>
            ) : (
              <img
                className="project-form__logo--area-click"
                src={tapGIF}
                alt="tap here"
              ></img>
            )}
          </div>

          <h1 className="project-form__logo--textfield">
            Click on circle to add your{" "}
            <span className="highlight "> Logo</span>
          </h1>
        </div>
      );
    };
    const projectMediaInput = () => {
      return (
        <div className="project-form__media">
          <div className="project-form__media--dropArea">
            <input
              id="project-form__media--dropArea-field"
              type="file"
              accept="image/*,video/*"
              className="project-form__media--dropArea-field"
              multiple
              onChange={handleChange("media")}
            />
            <div className="project-form__media--heading">
              <span>
                Drag & drop <span className="highlight">images</span>,
                <span className="highlight"> videos</span>
              </span>
            </div>
            <div className="project-form__media--subheading">
              <span>
                or{" "}
                <a href="/" className="highlight underline">
                  browse files
                </a>{" "}
                on your computer
              </span>
            </div>
          </div>
          <div className="project-form__media--files">
            {values.projectVideo
              ? this.mediaSkel(values.projectVideo)
              : values.projectImages.length > 0
              ? this.mediaSkel(values.projectImages[start++])
              : ""}

            {createElements()}
          </div>
        </div>
      );
    };
    return (
      <div className="project-form__modal">
        <a className="project-form__modal--back" onClick={prevStep}>
          <img src={backButton} alt="backButton" />
        </a>
        <div className="project-form__modal--heading">
          Add logo, images and videos.
        </div>
        <div className="project-form__modal--wrapper flex-col">
          {projectLogoInput()}
          {projectMediaInput()}
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

export default FormMedia;
