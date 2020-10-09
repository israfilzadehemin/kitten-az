import React from "react";
import Brand from "../assets/img/brand.png";
import classes from "./Logo.module.css";

const Logo = ({ width }) => {
  return (
    <div className={classes.Container}>
      <img src={Brand} alt="Brand logo" style={{ width: width }} />
    </div>
  );
};

export default Logo;
