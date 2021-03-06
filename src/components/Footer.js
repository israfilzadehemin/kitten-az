import classes from "./Footer.module.css";
import Input from "./Input";
import Button from "./Button";
import { getAllContacts } from "../api/apiCalls";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [contacts, setContacts] = useState([{}]);

  useEffect(() => {
    getAllContacts()
      .then((resp) => {
        setContacts(resp.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <ul className={classes.Container}>
      <li className={classes.FooterItem}>
        <h3 className={classes.FooterTitle}>Follow us on social media</h3>
        <a href={contacts[0].instagram} className={classes.FooterLink}>
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href={contacts[0].facebook} className={classes.FooterLink}>
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
        <a href={contacts[0].twitter} className={classes.FooterLink}>
          <i className="fab fa-twitter"></i>
          <span>Twitter</span>
        </a>
      </li>
      <li className={classes.FooterItem}>
        <h3 className={classes.FooterTitle}>
          <span>Contact us</span>
        </h3>
        <p className={classes.FooterText}>
          <i className="fas fa-map-marker-alt"></i>
          <span>{contacts[0].address}</span>
        </p>
        <p className={classes.FooterText}>
          <i className="fas fa-phone-volume"></i>
          <span>{contacts[0].phone}</span>
        </p>
        <p className={classes.FooterText}>
          <i className="far fa-clock"></i>
          <span>{contacts[0].hours}</span>
        </p>
      </li>
      <li className={classes.FooterItem}>
        <h3 className={classes.FooterTitle}>Subscribe newsletter</h3>
        <Input placeholder="Enter your email" />
        <Button text="Subscribe" />
      </li>
    </ul>
  );
};

export default Footer;
