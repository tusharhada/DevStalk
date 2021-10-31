import React from "react";
import { ReactComponent as Likes } from "images/likes.svg";
import { ReactComponent as Views } from "images/views.svg";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { likeProject } from "actions/projects";

const Thumbnail = ({ projectTagline, projectLogo, projectImage }) => {
  return (
    <>
      <div className="thumbnail__placeholder">
        <img className="thumbnail__img" src={projectImage} alt="temp"></img>
        <div className="thumbnail__overlay">
          <div className="information__project-tagline">
            <h2>{projectTagline}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({
  userName,
  userImage,
  userId,
  projectDomain,
  projectImage,
  projectTitle,
  projectId,
  projectTagline,
  projectLogo,
  projectLikes,
  projectViews,
}) => {
  // console.log(
  //   userName,
  //   userImage,
  //   projectDomain,
  //   projectImage,
  //   projectTitle,
  //   projectId,
  //   projectTagline,
  //   projectImage,
  //   projectLikes
  // );
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  const checkLikeStatus = () => {
    return (
      projectLikes?.length > 0 &&
      projectLikes?.find((like) => like === user?.result?._id)
    );
  };

  const openProjectPage = (e) => {
    history.push(`/projects/${projectId}`);
  };

  const openUserProfile = (e) => {
    history.push(`/profile/${userId}`);
  };

  return (
    <li className="card">
      <div className="card__thumbnail" onClick={(e) => openProjectPage(e)}>
        <Thumbnail
          projectId={projectId}
          projectLogo={projectLogo}
          projectImage={projectImage}
          projectTagline={projectTagline}
        />
      </div>
      <div className="card__details">
        <div className="card__information flex flex-row items-center">
          <img
            className="information__user-img"
            src={projectLogo}
            alt="temp2"
          ></img>
          <div className="information__wrapper flex flex-col justify-center">
            <button
              className="information__project-title button-reset"
              onClick={(e) => openProjectPage(e)}
            >
              <h1>{projectTitle}</h1>
            </button>
            <button
              className="information__user-name button-reset"
              onClick={openUserProfile}
            >
              <h1>{userName}</h1>
            </button>
          </div>
        </div>
        <div className="card__statistics-container">
          <div className="statistics-container__wrapper">
            <button
              className="button-reset"
              onClick={() => {
                console.log("hi");
                if (user) {
                  dispatch(likeProject(projectId));
                } else {
                }
              }}
            >
              <Likes
                className={`statistics-container__svg ${
                  checkLikeStatus() ? "statistics-container__svg--liked" : ""
                } `}
              />
            </button>
            <span className="statistics-container__text">
              {projectLikes.length > 0 ? projectLikes.length : "-"}
            </span>
          </div>
          <div className="statistics-container__wrapper ">
            <Views className="statistics-container__svg" />
            <span className="statistics-container__text">
              {projectViews ? projectViews : "-"}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
