import React from "react";
import classes from "./Input.module.css";

const Input = ({ width, placeholder }) => {
  return (
    <div className={classes.Container} style={{ width: width }}>
      <input className={classes.Input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
