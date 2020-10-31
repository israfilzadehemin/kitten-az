import React from "react";
import classes from "./ServiceCard.module.css";

const ServiceCard = ({ image, name }) => {
  return (
    <div className={classes.Container}>
      <img src={`img/${image}`} className={classes.CardImage} />
      <div className={classes.CardInfo}>{name}</div>
    </div>
  );
};

export default ServiceCard;
