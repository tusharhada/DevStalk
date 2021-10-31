import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { getProject, getProjectsBySearch } from "actions/projects";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import Header from "./Header.js";
import Details from "./Details.js";
import UserDetails from "./UserDetails.js";
import ProjectList from "Components/Gallery/ProjectList";

const ProjectPage = () => {
  const { project, projects } = useSelector((state) => state.projects);
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProject(id));
  }, [id]);

  useEffect(() => {
    if (project) {
      dispatch(
        getProjectsBySearch({
          search: "none",
          techStack: project?.techStack.join(","),
        })
      );
    }
  }, [project]);

  if (!project) return null;

  const recommendedProjects = projects.filter(({ _id }) => _id !== project._id);

  let i = 0;
  return (
    <>
      <div className="wrap project-container glass">
        <div className="project-content">
          <Header project={project} />
          <AutoplaySlider
            bullets={false}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            className="project-carousel"
          >
            {project.images.map((image) => (
              <div key={`image-${i++}`} data-src={image} />
            ))}
          </AutoplaySlider>
          <Details project={project} />
        </div>
        <UserDetails project={project} />
      </div>
      <div className="wrap recommended__container glass">
        <div className="flex flex-row items-center u-margin-bottom-s">
          <h2 className="recommended__heading">You might also like</h2>
          <div className="heading-decorator"></div>
        </div>
        <ProjectList projects={recommendedProjects} />
      </div>
    </>
  );
};

export default ProjectPage;
