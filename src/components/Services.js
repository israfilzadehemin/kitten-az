import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { getAllServices } from "../api/apiCalls";
import classes from "./Services.module.css";

const Services = () => {
  const [services, setServices] = useState([{}]);
  useEffect(() => {
    getAllServices()
      .then((resp) => {
        setServices(resp.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={classes.Container}>
      <Title text="Services" />
      <div className={classes.Services}>
        {services.map((s) => (
          <ServiceCard image={s.image} name={s.name} />
        ))}
      </div>
    </div>
  );
};

export default Services;
