import { React } from "react";
import { ReactComponent as SearchIcon } from "images/search.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "images/devStalk3DTransparentLogo.svg";

import Menu from "./Menu/index";
import NotSignedIn from "./NotSignedIn";
import SignedIn from "./SignedIn";

const RightElement = ({ userInformation, logoutHandler }) => {
  return (
    <div className="nav__part">
      <Link className="nav__el" to="/projects/search">
        <SearchIcon className="nav__icon" />
      </Link>
      {userInformation ? (
        <SignedIn
          userInformation={userInformation}
          logoutHandler={logoutHandler}
        />
      ) : (
        <NotSignedIn />
      )}
    </div>
  );
};

const LeftElement = () => {
  return (
    <div className="nav__part">
      <a href="/">
        <h1 className="nav__logo flex flex-row items-center flex-start">
          <Logo className="nav__logo__image" />
          dev<span className="nav__logo-inner">Stalk</span>
        </h1>
      </a>
      <Menu />
    </div>
  );
};

const Navbar = ({ userInformation, logoutHandler }) => {
  return (
    <div className="nav">
      {LeftElement()}
      <RightElement
        userInformation={userInformation}
        logoutHandler={logoutHandler}
      />
    </div>
  );
};

export default Navbar;
