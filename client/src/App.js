import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import UserProfile from "./Components/User/UserProfile";
import ProjectPage from "Components/Project/ProjectPage";
import SearchElement from "Components/SearchElement";
import * as actionType from "constants/actionTypes";

const BrowseFollowing = () => {
  return <Gallery category="following" />;
};

const BrowsePopular = () => {
  return <Gallery category="popular" />;
};

const BrowseRecent = () => {
  return <Gallery category="recent" />;
};

const Index = (userInformation) => {
  if (userInformation) {
    return <BrowseFollowing />;
  } else {
    return <BrowsePopular />;
  }
};

const ReadStories = () => {};

const WeeklyWarmUp = () => {};

const BrowseFullTimeJob = () => {};

const BrowseFreelanceJob = () => {};

const ViewDiscussion = () => {};

const SearchDesigner = () => {};

const PostFullTimeJob = () => {};

const PostFreelanceJob = () => {};

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="App">
      <Navbar userInformation={user} logoutHandler={logout} />
      <Switch>
        <Route path="/profile/:id">
          <UserProfile />
        </Route>
        <Route path="/shots/popular">
          <BrowsePopular />
        </Route>
        <Route path="/shots/recent">
          <BrowseRecent />
        </Route>
        <Route path="/projects/search">
          <Gallery category="search" />
        </Route>
        <Route path="/projects/:id">
          <ProjectPage />
        </Route>
        <Route path="/">
          <Index userInformation={user} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
