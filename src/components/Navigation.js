import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import SideDrawer from "./SideDrawer";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={classes.Container}>
      <Logo width="150px" className={classes.Logo} />
      <NavBar />
      <SideDrawer />
    </div>
  );
};

export default Navigation;
