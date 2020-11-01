import React, { useState } from "react";
import classes from "./AddBreed.module.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Selectbox from "../components/Selectbox";

const AddBreed = () => {
  const [breeds, setBreeds] = useState(["cat", "dog", "other"]);

  return (
    <div className={classes.Container}>
      <div className={classes.Form}>
        <Input width="100%" placeholder="Name" type="text" />
        <Input width="100%" placeholder="Info" type="textarea" />
        <Selectbox text="Select breed" width="100%" options={breeds} />
        <h6>Responsibilities</h6>
        <input type="checkbox" /> <label>Walking</label>
        <input type="checkbox" /> <label>Walking</label>
        <input type="checkbox" /> <label>Walking</label>
        <h6>Products</h6>
        <input type="checkbox" /> <label>Kitten</label>
        <input type="checkbox" /> <label>Baby</label>
        <input type="checkbox" /> <label>Milk</label>
        <input type="file" />
        <Button width="100%" text="Add" font="25px" />
      </div>
    </div>
  );
};

export default AddBreed;
