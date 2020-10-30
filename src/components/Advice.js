import classes from "./Advice.module.css";
import React from "react";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";

const Advice = () => {
  return (
    <div className={classes.Container}>
      <Title text="Get advised" />
      <div className={classes.Content}>
        <Input type="text" placeholder="Contact number" />
        <Input type="text" placeholder="Breed" />
        <Input
          type="textarea"
          placeholder="Problem (Please try to be as clear as possible)"
        />
        <Button text="Send" width="100%" />
      </div>
    </div>
  );
};

export default Advice;
