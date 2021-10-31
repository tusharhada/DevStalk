import React, { useState } from "react";
import { ReactComponent as FormIllustration } from "../../images/form_illustration.svg";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import { signin, signup } from "actions/auth";
import SignIn from "./SignIn";
import Register from "./Register";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Form = (props) => {
  const [formType, setFormType] = useState(props.formType);
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === "register") {
      console.log(formType);
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    console.log("Google Sign In was unsuccessful. Try again later");

  const handleChange = (e) => {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const changeToRegister = () => {
    setFormType("register");
  };
  const changeToLogin = () => {
    setFormType("signin");
  };

  return (
    <div className="form__container">
      <div className="auth__sidebar">
        <div className="artwork">
          <FormIllustration />
        </div>
      </div>
      <div className="auth__main">
        {formType === "signin" ? (
          <SignIn
            changeFormType={changeToRegister}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Register
            changeFormType={changeToLogin}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
