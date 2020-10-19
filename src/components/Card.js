import React from "react";
import classes from "./Card.module.css";

const Card = ({ name, category, image }) => {
  return (
    <a href="#" className={classes.Container}>
      <img src={`img/${image}`} className={classes.CardImage} />
      <div className={classes.CardInfo}>
        <div className={classes.CardCategory}>{category}</div>
        <div className={classes.CardTitle}>{name}</div>
      </div>
    </a>
  );
};

export default Card;
