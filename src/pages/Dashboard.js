import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.Container}>
      <ul className={classes.Accordion}>
        <li className={classes.AccordionItem}>
          <h3 className={classes.AccordionSection}>Manage Breeds</h3>
          <div className={classes.AccordionBody}>
            <Link className={classes.AccordionLink} to="/newbreed">
              Add new breed
            </Link>
            <Link className={classes.AccordionLink} to="/breedlist">
              View breeds
            </Link>
          </div>
        </li>
        <li className={classes.AccordionItem}>
          <h3 className={classes.AccordionSection}>Manage about section</h3>
          <div className={classes.AccordionBody}>
            <Link className={classes.AccordionLink} to="/newbreed">
              Update about section
            </Link>
          </div>
        </li>
        <li className={classes.AccordionItem}>
          <h3 className={classes.AccordionSection}>Manage services section</h3>
          <div className={classes.AccordionBody}>
            <Link className={classes.AccordionLink} to="/newbreed">
              Add new service
            </Link>
            <Link className={classes.AccordionLink} to="/breedlist">
              View services
            </Link>
          </div>
        </li>
        <li className={classes.AccordionItem}>
          <h3 className={classes.AccordionSection}>Manage contacts section</h3>
          <div className={classes.AccordionBody}>
            <Link className={classes.AccordionLink} to="/newbreed">
              Add new contact
            </Link>
            <Link className={classes.AccordionLink} to="/breedlist">
              View contacts
            </Link>
          </div>
        </li>
        <li className={classes.AccordionItem}>
          <h3 className={classes.AccordionSection}>Manage subscribers</h3>
          <div className={classes.AccordionBody}>
            <Link className={classes.AccordionLink} to="/breedlist">
              View subscribers
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
