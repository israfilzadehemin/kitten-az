import classes from "./Selectbox.module.css";
import React, { useEffect, useState } from "react";

const Selectbox = ({ text, width, options }) => {
  const [ops, setOps] = useState([]);
  useEffect(() => {
    if (options) {
      setOps(options);
    }
  }, [options]);
  return (
    <div className={classes.Container} style={{ width: width }}>
      <select className={classes.Select} defaultValue={"select"}>
        <option disabled value="select">
          {text}
        </option>
        {ops.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
};

export default Selectbox;
