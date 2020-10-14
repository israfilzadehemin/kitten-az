import classes from "./SearchBar.module.css";
import React from "react";
import Button from "./Button";
import Input from "./Input";

const SearchBar = () => {
  return (
    <div className={classes.Container}>
      <h3 className={classes.Header}> Search</h3>
      <Input width="95%" type="text" placeholder="Enter keyword" />
      <Button width="95%" text="Find" font="25px" />
      <h3 className={classes.Header}> Select by ABC</h3>
      <div className={classes.ABC}>
        <p className={classes.ABCItem}>A</p>
        <p className={classes.ABCItem}>B</p>
        <p className={classes.ABCItem}>C</p>
        <p className={classes.ABCItem}>D</p>
        <p className={classes.ABCItem}>E</p>
        <p className={classes.ABCItem}>F</p>
        <p className={classes.ABCItem}>G</p>
        <p className={classes.ABCItem}>H</p>
        <p className={classes.ABCItem}>I</p>
        <p className={classes.ABCItem}>J</p>
        <p className={classes.ABCItem}>K</p>
        <p className={classes.ABCItem}>L</p>
        <p className={classes.ABCItem}>A</p>
        <p className={classes.ABCItem}>B</p>
        <p className={classes.ABCItem}>C</p>
        <p className={classes.ABCItem}>D</p>
        <p className={classes.ABCItem}>E</p>
        <p className={classes.ABCItem}>F</p>
        <p className={classes.ABCItem}>G</p>
        <p className={classes.ABCItem}>H</p>
        <p className={classes.ABCItem}>I</p>
        <p className={classes.ABCItem}>J</p>
        <p className={classes.ABCItem}>K</p>
        <p className={classes.ABCItem}>L</p>
      </div>
    </div>
  );
};

export default SearchBar;
