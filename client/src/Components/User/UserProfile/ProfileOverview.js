import React, { useEffect, useState } from "react";
import { Link, Switch, Route, useLocation, Redirect } from "react-router-dom";
import ProjectList from "Components/Gallery/ProjectList";
import * as api from "api/index";
import { ReactComponent as Github } from "images/hello/github.svg";
import { ReactComponent as Facebook } from "images/hello/facebook.svg";
import { ReactComponent as Instagram } from "images/hello/instagram-alt.svg";
import { ReactComponent as Linkedin } from "images/hello/linkedin.svg";
import { ReactComponent as Twitter } from "images/hello/twitter.svg";
import { ReactComponent as Youtube } from "images/hello/youtube.svg";
import { ReactComponent as Medium } from "images/hello/medium-m.svg";

const Projects = ({ project }) => {
  console.log(project);
  return (
    <React.Fragment>
      <ProjectList projects={project} />
    </React.Fragment>
  );
};

const LikedProjects = ({ project }) => {
  return (
    <React.Fragment>
      <ProjectList projects={project} />
    </React.Fragment>
  );
};

const Collection = () => {
  return <React.Fragment></React.Fragment>;
};

const Connect = ({ userInfo }) => {
  return (
    <React.Fragment>
      {userInfo.website && (
        <div className="connect__container">
          <a href={`https://${userInfo.website}`}>Portfolio Website</a>
        </div>
      )}
      {userInfo.linkedin && (
        <div className="connect__container">
          <Linkedin />
          <a href={`https://${userInfo.linkedin}`}>Linkedin</a>
        </div>
      )}
      {userInfo.github && (
        <div className="connect__container">
          <Github />
          <a href={`https://${userInfo.github}`}>Github</a>
        </div>
      )}
      {userInfo.twitter && (
        <div className="connect__container">
          <Twitter />
          <a href={`https://${userInfo.twitter}`}>Twitter</a>
        </div>
      )}
      {userInfo.youtube && (
        <div className="connect__container">
          <Youtube />
          <a href={`https://${userInfo.youtube}`}>Youtube</a>
        </div>
      )}
      {userInfo.medium && (
        <div className="connect__container">
          <Medium />
          <a href={`https://${userInfo.medium}`}>Medium</a>
        </div>
      )}
      {userInfo.instagram && (
        <div className="connect__container">
          <Instagram />
          <a href={`https://${userInfo.instagram}`}>Instagram</a>
        </div>
      )}
      {userInfo.facebook && (
        <div className="connect__container">
          <Facebook />
          <a href={`https://${userInfo.facebook}`}>Facebook</a>
        </div>
      )}
    </React.Fragment>
  );
};

const About = ({ userInfo }) => {
  userInfo = userInfo[0];
  return (
    <React.Fragment>
      <div className="overview__about">
        <div className="overview__about__left">
          <h2 className="overview__about__heading">Bio</h2>
          <div className="overview__about__bio">
            <p>{userInfo.bio}</p>
          </div>
          <h2 className="overview__about__heading">Skills</h2>
          <div className="overview__about__skills">
            {userInfo.skills &&
              userInfo.skills.map((skill) => {
                return (
                  <div className="overview__about__skills__container">
                    <p>{skill}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="overview__about__right">
          <div className="overview__about__details">
            <p className="overview__about__details__field">
              {userInfo.designation}
            </p>
            <p className="overview__about__details__field">
              {userInfo.organization}
            </p>
            <p className="overview__about__details__field">
              {userInfo.location}
            </p>
            <p className="overview__about__details__field">
              {userInfo.createdAt}
            </p>
          </div>
          <div className="overview__about__connect">
            <Connect userInfo={userInfo} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

/// Navigation
const Nav = ({ contentType, setContentTypeHandler, path }) => {
  return (
    <React.Fragment>
      <Link
        className={`overview__nav__item ${
          contentType === "projects" ? "overview__nav__item--active" : ""
        }`}
        to={`${path}/projects`}
        onClick={() => {
          setContentTypeHandler("projects");
        }}
      >
        Projects
      </Link>
      <Link
        className={`overview__nav__item ${
          contentType === "collections" ? "overview__nav__item--active" : ""
        }`}
        to={`${path}/collections`}
        onClick={() => {
          setContentTypeHandler("collections");
        }}
      >
        Collections
      </Link>
      <Link
        className={`overview__nav__item ${
          contentType === "liked_projects" ? "overview__nav__item--active" : ""
        }`}
        to={`${path}/liked_projects`}
        onClick={() => {
          setContentTypeHandler("liked_projects");
        }}
      >
        Liked Projects
      </Link>
      <Link
        className={`overview__nav__item ${
          contentType === "about" ? "overview__nav__item--active" : ""
        }`}
        to={`${path}/about`}
        onClick={() => {
          setContentTypeHandler("about");
        }}
      >
        About
      </Link>
    </React.Fragment>
  );
};

export default function ProfileOverview({ ProfileOverview }) {
  // const { path } = props.match;
  const [project, setProjects] = useState([]);
  const [likedProject, setLikedProject] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [contentType, setContentType] = useState("projects");
  const location = useLocation();
  const array = location.pathname.split("/");
  const path = "/" + array[1] + "/" + array[2];
  const userId = array[2];

  useEffect(() => {
    const getProject = async () => {
      const resp = await api.fetchUserProject(userId);
      setProjects(resp.data);
    };
    getProject();
    const getLikedProject = async () => {
      const resp = await api.fetchUserLikedProject(userId);
      setLikedProject(resp.data);
    };
    getLikedProject();
    const getUserInfo = async () => {
      const resp = await api.fetchUser(userId);
      setUserInfo(resp.data);
    };
    getUserInfo();
  }, []);

  const setContentTypeHandler = (e) => {
    setContentType(e);
  };
  return (
    <div className="profile-overview glass">
      <div className="overview__nav">
        <Nav
          path={path}
          contentType={contentType}
          setContentTypeHandler={setContentTypeHandler}
        />
      </div>
      <div className="overview__seprator"></div>
      <div className="overview__content">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/projects`} />
          </Route>
          <Route path={`${path}/projects`}>
            {project && <Projects project={project} />}
          </Route>
          <Route path={`${path}/liked_projects`}>
            {likedProject && <LikedProjects project={likedProject} />};
          </Route>
          <Route path={`${path}/collections`}>
            <Collection />;
          </Route>
          <Route path={`${path}/about`}>
            {userInfo && <About userInfo={userInfo} />};
          </Route>
        </Switch>
      </div>
    </div>
  );
}
