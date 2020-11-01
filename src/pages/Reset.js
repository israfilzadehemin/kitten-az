import classes from "./Reset.module.css";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className={classes.Container}>
      <Input width="100%" type="text" placeholder="Email" />
      <Button width="100%" text="Reset" font="25px" />
    </div>
  );
};

export default Reset;
