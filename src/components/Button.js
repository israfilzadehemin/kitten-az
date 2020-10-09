import React from "react";
import classes from "./Button.module.css";

const Button = ({ width, text, font }) => {
  return (
    <div className={classes.Container} style={{ width: width }}>
      <button className={classes.Button} style={{ fontSize: font }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
