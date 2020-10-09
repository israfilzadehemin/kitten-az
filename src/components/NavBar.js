import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const [searchOpen, setSearchOpen] = useState(false);

  let searchContainerClasses = [classes.SearchContainer];

  if (searchOpen == true) {
    searchContainerClasses.push(classes.SearchContainerOpen);
  }

  return (
    <div className={classes.Container}>
      <ul className={classes.NavContainer}>
        <li className={classes.NavItem}>
          <a className={classes.NavLink} href="#">
            Home
          </a>
        </li>
        <li className={classes.NavItem}>
          <a className={classes.NavLink} href="#">
            All cats
          </a>
        </li>
        <li className={classes.NavItem}>
          <a className={classes.NavLink} href="#">
            Get advised
          </a>
        </li>
        <li className={classes.NavItem}>
          <a className={classes.NavLink} href="#">
            About us
          </a>
        </li>
        <li className={classes.NavItem}>
          <a className={classes.NavLink} href="#">
            Contact
          </a>
        </li>
        <li
          className={classes.NavItem}
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <a className={classes.NavLink}>Search</a>
        </li>
      </ul>
      <div className={searchContainerClasses.join(" ")}>
        <Input width="70%" placeholder="Search..." />{" "}
        <Button width="25%" text="Search" font="" />
      </div>
    </div>
  );
};

export default NavBar;
