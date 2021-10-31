import React from "react";
import UserMenu from "./UserMenu";
import PostProject from "./PostProject";

const SignedIn = ({ userInformation, logoutHandler }) => {
  return (
    <>
      <UserMenu
        userInformation={userInformation}
        logoutHandler={logoutHandler}
      />
      <PostProject userInformation={userInformation} />
    </>
  );
};

export default SignedIn;
