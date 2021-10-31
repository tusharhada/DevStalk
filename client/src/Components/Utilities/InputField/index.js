import React from "react";

const InputField = (props) => {
  return (
    <div className={`input-field__container ${props.containerClass}`}>
      <input
        id={props.id}
        type={props.type}
        className={`input-field__field ${props.inputClass}`}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
      ></input>
      <label
        htmlFor={props.id}
        className={`input-field__label ${props.labelClass}`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default InputField;
