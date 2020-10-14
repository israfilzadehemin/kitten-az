import React from "react";
import classes from "./ServiceCard.module.css";

const Card = (props) => {
  return (
    <div className={classes.Container}>
      <img
        src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        className={classes.CardImage}
      />
      <div className={classes.CardInfo}>
        Providing regular info about your sweet friends
      </div>
    </div>
  );
};

export default Card;
