import classes from "./Login.module.css";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.Container}>
      <Input width="100%" type="text" placeholder="Email" />
      <Input width="100%" type="password" placeholder="Password" />
      <Button width="50%" text="Submit" font="25px" />
      <Link className={classes.Link} to="/reset">
        Forgot password?
      </Link>
    </div>
  );
};

export default Login;
