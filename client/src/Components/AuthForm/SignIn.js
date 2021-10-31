import React, { useState } from "react";
import InputField from "Components/Utilities/InputField";

const InputFieldCustom = ({
  id,
  type,
  placeholder,
  label,
  name,
  handleChange,
}) => {
  return (
    <InputField
      id={id}
      type={type}
      placeholder={placeholder}
      label={label}
      name={name}
      handleChange={handleChange}
      containerClass="form__input"
      inputClass="form__input__field"
      labelClass="form__input__label"
    />
  );
};

const SignIn = ({ changeFormType, handleChange, handleSubmit }) => {
  return (
    <div className="auth__content">
      <div className="auth__header">
        <h1 className="heading-secondary heading-secondary--main">
          Sign in to Cold Slide
        </h1>
        <p className="heading-secondary heading-secondary--sub">
          <span>Not a member ? </span>
          <a href="javascript:void(0);" onClick={changeFormType}>
            Sign up
          </a>
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <InputFieldCustom
          label="Email or Username"
          type="mail"
          placeholder="Username"
          id="email"
          name="email"
          handleChange={handleChange}
          autoFocus
        />
        <InputFieldCustom
          label="Password"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          handleChange={handleChange}
        />
        <button className="primary_button primary_button--dark form__button u-margin-top-s">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
