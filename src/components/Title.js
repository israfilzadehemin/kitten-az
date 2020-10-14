import classes from "./Title.module.css";
import React from "react";

const Title = ({ text }) => {
  return <h1 className={classes.Container}>{text}</h1>;
};

export default Title;
