import classes from "./Footer.module.css";
import Input from "./Input";
import Logo from "./Logo";
import Button from "./Button";
import React from "react";

const Footer = () => {
  return (
    <ul className={classes.Container}>
      <li className={classes.FooterItem}>
        <h3 className={classes.FooterTitle}>Follow us on social media</h3>
        <a href="#" className={classes.FooterLink}>
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="#" className={classes.FooterLink}>
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
        <a href="#" className={classes.FooterLink}>
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
          <span>Elchin Azizov 47</span>
        </p>
        <p className={classes.FooterText}>
          <i className="fas fa-phone-volume"></i>
          <span>(070 )559-56-56</span>
        </p>
        <p className={classes.FooterText}>
          <i className="far fa-clock"></i>
          <span>From 09:00 to 18:00</span>
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
