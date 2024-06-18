import React, { useState } from "react";
import InputField from "Components/Utilities/InputField";

const InputFieldCustom = ({
  id,
  type,
  placeholder,
  label,
  name,
  handleChange,
  containerClass,
  inputClass,
  labelClass,
}) => {
  return (
    <InputField
      id={id}
      type={type}
      placeholder={placeholder}
      label={label}
      name={name}
      handleChange={handleChange}
      containerClass={`form__input ${containerClass}`}
      inputClass={`form__input__field ${inputClass}`}
      labelClass={`form__input__label ${labelClass}`}
    />
  );
};

const Register = ({ changeFormType, handleChange, handleSubmit }) => {
  const { page, setPage } = useState(1);
  return (
    <div className="auth__content">
      {/*////////////////////////////////////////////////////////////////////*/}
      {/* Header */}
      <div className="auth__header">
        <h1 className="heading-secondary heading-secondary--main">
          Sign up to devStalk
        </h1>
        <p className="heading-secondary heading-secondary--sub">
          <span>Already a member ? </span>
          <a href="javascript:void(0);" onClick={changeFormType}>
            Sign in
          </a>
        </p>
      </div>
      {/*////////////////////////////////////////////////////////////////////*/}
      {/* Page 1 */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <InputFieldCustom
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            handleChange={handleChange}
          />
          <InputFieldCustom
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            handleChange={handleChange}
            containerClass="u-margin-left-text-s"
          />
        </div>
        <InputFieldCustom
          label="Email Id"
          type="mail"
          id="email"
          name="email"
          placeholder="Enter your email id"
          handleChange={handleChange}
        />
        <InputFieldCustom
          label="Username"
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          handleChange={handleChange}
        />

        <div className="flex flex-row">
          <InputFieldCustom
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          <InputFieldCustom
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            containerClass="u-margin-left-text-s"
          />
        </div>
        <div className="u-margin-top-s flex flex-col items-start">
          <p className="form__info u-margin-bottom-text-s">
            By clicking the "Create Account" button, you are creating a
            ColdSlide Account, and you agree to ColdSlide's{" "}
            <span>
              <a href="#">Terms of Use</a>
            </span>{" "}
            and{" "}
            <span>
              <a href="#">Privacy Policy</a>
            </span>
          </p>
          <button
            type="submit"
            className="primary_button primary_button--dark form__button flex-basis__half"
          >
            Create Account
          </button>
        </div>
        {/*////////////////////////////////////////////////////////////////////*/}
        {/* Page 1 */}
      </form>
    </div>
  );
};

export default Register;
