import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <a href="#" className={classes.Container}>
      <img
        src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        className={classes.CardImage}
      />
      <div className={classes.CardInfo}>
        <div className={classes.CardCategory}>Cats</div>
        <div className={classes.CardTitle}>British shorthair</div>
      </div>
    </a>
  );
};

export default Card;
