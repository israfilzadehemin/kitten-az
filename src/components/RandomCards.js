import React from "react";
import Title from "./Title";
import classes from "./RandomCards.module.css";

const RandomCards = () => {
  return (
    <div className={classes.Container}>
      <Title text="Random" />
    </div>
  );
};

export default RandomCards;
