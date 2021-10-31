import React, { Component } from "react";

import FormProjectDetails from "./Forms/FormProjectDetails";
import FormMedia from "./Forms/FormMedia";
import FormEmbedLink from "./Forms/FormEmbedLink";
import Confirm from "./Forms/Confirm";
import Success from "./Forms/Success";

export class UploadForm extends Component {
  state = {
    step: 1,
    projectTitle: "",
    projectDescription: "",
    projectTagline: "",
    projectDomain: "",
    projectTags: [],
    projectImages: [],
    projectVideo: "",
    projectLogo: "",
    youtubeLink: "",
    githubLink: "",
    projectLink: "",
    projectDocuments: [],
  };

  //Next Page
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Prev Page
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Change in Input
  checkUnique = (value) => {
    return !this.state["projectTags"].includes(value);
  };

  addProjectTags = (value) => {
    value = value.slice(0, value.length - 1);
    if (this.checkUnique(value)) {
      this.setState({ projectTags: [...this.state["projectTags"], value] });
    }
  };
  removeTag = (input) => {
    this.setState({
      projectTags: [
        ...this.state["projectTags"].filter((tag) => tag !== input),
      ],
    });
    console.log(this.state["projectTags"]);
  };

  addMedia = async (files) => {
    let file;
    for (file of files) {
      if (
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif" ||
        file.type === "image/webp"
      ) {
        console.log(file.type);
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "projectImages");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dcwsff19o/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const webImage = await res.json();
        console.log(webImage);
        this.setState({
          projectImages: [...this.state["projectImages"], webImage.secure_url],
        });
      } else if (this.state["selectedVideo"] === null) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload");
        const res = await fetch(
          "	https://api.cloudinary.com/v1_1/dcwsff19o/video/upload/f_jpg",
          {
            method: "POST",
            body: data,
          }
        );
        console.log(res);
        const webVideo = await res.json();
        console.log(webVideo.secure_url);
        this.setState({
          projectVideo: webVideo.secure_url,
        });
      }
    }
  };

  addLogo = async (file) => {
    console.log(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "projectImages");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcwsff19o/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const webImage = await res.json();
    this.setState({
      projectLogo: webImage.secure_url,
    });
    console.log(this.state.projectLogo);
  };
  removeLogo = () => {
    this.setState({ projectLogo: "" });
  };

  addDocuments = (docs) => {};

  handleChange = (input) => (e) => {
    switch (input) {
      case "projectDocuments":
        {
          let docs = e.target.value;
          this.addDocuments(docs);
        }
        break;
      case "projectTags":
        {
          console.log(e);
          let value = e.target.value;
          if (value[value.length - 1] === ",") {
            this.addProjectTags(value);
            e.target.value = "";
          }
        }
        break;
      case "media":
        {
          let files = e.target.files;
          this.addMedia(files);
          e.target.value = null;
        }
        break;
      case "projectLogo":
        {
          let files = e.target.files;
          this.addLogo(files[0]);
          e.target.value = null;
        }
        break;
      default:
        this.setState({ [input]: e.target.value });
        break;
    }
  };

  render() {
    const { step } = this.state;
    const {
      projectTitle,
      projectDescription,
      projectTagline,
      projectDomain,
      projectTags,
      projectImages,
      projectVideo,
      projectLogo,
      youtubeLink,
      githubLink,
      projectLink,
      projectDocuments,
    } = this.state;
    const projectDetails = {
      projectTitle,
      projectDescription,
      projectTagline,
      projectDomain,
      projectTags,
    };
    const projectMedia = {
      projectImages,
      projectVideo,
      projectLogo,
    };
    const projectEmbedData = {
      youtubeLink,
      githubLink,
      projectLink,
      projectDocuments,
    };
    const values = {
      ...projectDetails,
      ...projectMedia,
      ...projectEmbedData,
    };
    switch (step) {
      case 1:
        return (
          <FormProjectDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            removeTag={this.removeTag}
            handleBackspace={this.handleBackspace}
            values={projectDetails}
          />
        );
      case 2:
        return (
          <FormMedia
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            removeLogo={this.removeLogo}
            values={projectMedia}
          />
        );
      case 3:
        return (
          <FormEmbedLink
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={projectEmbedData}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
        return <div></div>;
    }
  }
}

export default UploadForm;
