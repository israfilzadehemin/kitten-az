import React, { useState } from "react";
import classes from "./SideDrawer.module.css";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";

const SideDrawer = (props) => {
  const [drawerOpen, setDrawerOpen] = useState();
  const [searchOpen, setSearchOpen] = useState(false);

  let searchContainerClasses = [classes.SearchContainer];

  if (searchOpen == true) {
    searchContainerClasses.push(classes.SearchContainerOpen);
  }

  let containerClasses = [classes.Container];
  let togglerClases = [classes.Toggler];

  const onClickToggler = () => {
    setDrawerOpen(!drawerOpen);
  };

  if (drawerOpen === true) {
    togglerClases.push(classes.TogglerOpen);
    containerClasses.push(classes.ContainerOpen);
  }
  return (
    <>
      <div className={togglerClases.join(" ")} onClick={onClickToggler}>
        <div className={classes.TogglerItem}></div>
        <div className={classes.TogglerItem}></div>
        <div className={classes.TogglerItem}></div>
      </div>
      <ul className={containerClasses.join(" ")}>
        <li className={classes.MenuItem}>
          <a className={classes.MenuLink} href="#">
            Home
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a className={classes.MenuLink} href="#">
            All breeds
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a className={classes.MenuLink} href="#">
            Get advised
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a className={classes.MenuLink} href="#">
            About us
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a className={classes.MenuLink} href="#">
            Contact
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a
            className={classes.MenuLink}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            Search
          </a>
        </li>
        <li className={classes.MenuItem} style={{ width: "100%" }}>
          <div className={searchContainerClasses.join(" ")}>
            <Input width="70%" placeholder="Search..." />{" "}
            <Button width="25%" text="Search" font="15px" />
          </div>
        </li>
      </ul>
    </>
  );
};

export default SideDrawer;
