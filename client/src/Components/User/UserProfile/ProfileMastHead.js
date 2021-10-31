import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserImageTemp from "images/userTempImages/userAvatar.webp";
import { ReactComponent as CheckMark } from "images/userTempImages/checkmark.svg";
import { ReactComponent as UserAvatar } from "images/userTempImages/plus.svg";
import imgSrc from "images/userTempImages/userProject.webp";

const FollowPrompt = ({ userId, following }) => {
  if (following) {
    return (
      <React.Fragment>
        <CheckMark />
        <span>Following</span>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <UserAvatar />
        <span>Follow</span>
      </React.Fragment>
    );
  }
};
const TeamSearch = ({ teamId }) => {
  return (
    <Link to={teamId.link} className="team--link">
      <img src={teamId.avatar} alt={teamId.name}></img>
    </Link>
  );
};

export default function ProfileMastHead({
  userAvatar,
  userProfileName,
  userProfileIntro,
  userTeams,
  userId,
}) {
  const [following, setFollowing] = useState(false);
  return (
    <div className="profile-masthead flex flex-row items-center glass">
      <div className="masthead__content">
        <div className="masthead__avatar">
          <img
            className="profile__avatar"
            src={UserImageTemp}
            alt={userProfileName}
          />
        </div>
        <div className="masthead__profile-name">
          <h1>{userProfileName}</h1>
        </div>
        <div className="masthead__intro">
          <h2>{userProfileIntro}</h2>
        </div>
        {userTeams ? (
          <div className="masthead__teams">
            <span>On Teams</span>
          </div>
        ) : (
          ""
        )}
        <div className="masthead__actions">
          <div
            className="masthead__actions--follow-prompt flex flex-row items-center"
            onClick={() => {
              console.log("clicked");
              setFollowing(!following);
            }}
          >
            <FollowPrompt following={following} />
          </div>
        </div>
      </div>
      <div className="masthead__images">
        <div>
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}
