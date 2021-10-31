import React, { Component } from "react";
import { ReactComponent as Cross } from "images/cross.svg";

export class TagComponent extends Component {
  render() {
    return (
      <div className="project-form__tag">
        <span className="project-form__tag--name">{this.props.text}</span>
        <Cross
          className="project-form__tag--delete"
          onClick={() => {
            this.props.removeTag(this.props.text);
          }}
        />
      </div>
    );
  }
}

export default TagComponent;
