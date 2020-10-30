import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink
            activeClassName={classes.Active}
            className={classes.NavLink}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink className={classes.NavLink} to="/all">
            All cats
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink className={classes.NavLink} to="/advice">
            Get advised
          </NavLink>
        </li>
        <li className={classes.NavItem}>
          <NavLink className={classes.NavLink} to="/about">
            About us
          </NavLink>
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
