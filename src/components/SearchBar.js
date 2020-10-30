import classes from "./SearchBar.module.css";
import React from "react";
import Button from "./Button";
import Input from "./Input";

const SearchBar = ({ onClickLetter, onClickShowAll }) => {
  let letters = [];
  for (let i = 97; i <= 122; i++) {
    letters.push(String.fromCharCode(i).toUpperCase());
  }
  return (
    <div className={classes.Container}>
      <h3 className={classes.Header}> Search</h3>
      <Input width="95%" type="text" placeholder="Enter keyword" />
      <Button width="95%" text="Find" font="25px" />
      <h3 className={classes.Header}> Select by ABC</h3>
      <div className={classes.ABC}>
        {letters.map((l) => (
          <button
            key={l}
            className={classes.ABCItem}
            onClick={() => onClickLetter(l)}
          >
            {l}
          </button>
        ))}
        <Button
          width="95%"
          text="Show all"
          font="25px"
          onClick={onClickShowAll}
        />
      </div>
    </div>
  );
};

export default SearchBar;
