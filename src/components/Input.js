import React from "react";
import classes from "./Input.module.css";

const Input = ({ width, placeholder, type }) => {
  let content = "";

  let textareaClasses = [classes.Input, classes.Textarea];

  if (type === "textarea") {
    content = (
      <textarea
        className={textareaClasses.join(" ")}
        placeholder={placeholder}
      ></textarea>
    );
  } else {
    content = (
      <input
        type={type}
        className={classes.Input}
        placeholder={placeholder}
      />
    );
  }

  return (
    <div className={classes.Container} style={{ width: width }}>
      {content}
    </div>
  );
};

export default Input;
