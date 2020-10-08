import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.Container}>
      <input className={classes.Input} type="text" placeholder="Name" />
    </div>
  );
};

export default Input;
