import React, { Component } from "react";
import { MainBody, SubBody } from "Components/Utilities/BodyType";
import ProfileMastHead from "./ProfileMastHead";
import ProfileOverview from "./ProfileOverview";

export class UserProfile extends Component {
  userObject = {
    userId: "1",
    userAvatar: "/images/userTempImages/userAvatar.webp",
    userProfileName: "Dwinawan",
    userProfileIntro: "UI Designer, love something simple and clean",
    userTeams: "ghg",
    userProjects: [],
    userCollections: [],
    userLiked: [],
    userAbout: {},
  };
  render() {
    const { userId, userAvatar, userProfileName, userProfileIntro, userTeams } =
      this.userObject;
    const { userProjects, userCollections, userLiked, userAbout } =
      this.userObject;
    const profileInfo = {
      userId,
      userAvatar,
      userProfileName,
      userProfileIntro,
      userTeams,
    };
    const profileOverview = {
      userTeams,
      userProjects,
      userCollections,
      userLiked,
      userAbout,
    };

    return (
      <MainBody className="flex flex-col">
        <ProfileMastHead {...profileInfo} />
        <ProfileOverview profileOverview={profileOverview} />
      </MainBody>
    );
  }
}

export default UserProfile;
