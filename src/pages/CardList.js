import classes from "./CardList.module.css";
import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

const CardList = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <SearchBar />
      </div>
      <div className={classes.Right}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
