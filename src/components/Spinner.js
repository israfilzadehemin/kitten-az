import classes from "./Spinner.module.css";
import React from "react";

const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
