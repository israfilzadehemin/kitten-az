import React from "react";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className={classes.Container}>
      <Title text="Services" />
      <div className={classes.Services}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
