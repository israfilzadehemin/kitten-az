import classes from "./About.module.css";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { getAllAbouts } from "../api/apiCalls";

const About = (props) => {
  const [abouts, setAbouts] = useState([{}]);

  useEffect(() => {
    getAllAbouts()
      .then((resp) => {
        setAbouts(resp.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={classes.Container}>
      <Title text="About us" />
      <p className={classes.Body}>{abouts[0].name}</p>
    </div>
  );
};

export default About;
