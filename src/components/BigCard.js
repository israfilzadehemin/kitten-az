import React, { useState } from "react";
import classes from "./BigCard.module.css";
import Image from "../assets/img/BM8XYJ.jpg";
import Input from "./Input";
import Button from "./Button";

const BigCard = () => {
  const [generalInfo, setGeneralInfo] = useState(false);
  const [foods, setFoods] = useState(false);
  const [responsibilites, setResponsibilites] = useState(false);
  const [characteristics, setCharacteristics] = useState(false);
  const [sortFoods, setSortFoods] = useState("suggestion");

  let generalInfoClasses =
    generalInfo === true
      ? [classes.AccordionItem, classes.Active]
      : [classes.AccordionItem];

  let foodsClasses =
    foods === true
      ? [classes.AccordionItem, classes.Active]
      : [classes.AccordionItem];

  let responsibilitesClasses =
    responsibilites === true
      ? [classes.AccordionItem, classes.Active]
      : [classes.AccordionItem];

  let characteristicsClasses =
    characteristics === true
      ? [classes.AccordionItem, classes.Active]
      : [classes.AccordionItem];

  let suggestionButtonClasses =
    sortFoods === "suggestion"
      ? [(classes.FoodButton, classes.FoodButtonActive)]
      : [classes.FoodButton];

  let priceButtonClasses =
    sortFoods === "price"
      ? [(classes.FoodButton, classes.FoodButtonActive)]
      : [classes.FoodButton];

  let producerButtonClasses =
    sortFoods === "producer"
      ? [(classes.FoodButton, classes.FoodButtonActive)]
      : [classes.FoodButton];

  const toggleSort = (by) => {
    setSortFoods(by);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <img src={Image} alt="Breed image" />
      </div>
      <div className={classes.Right}>
        <h2 className={classes.Title}>British silver Tabby</h2>
        <div className={classes.Accordion}>
          <div className={generalInfoClasses.join(" ")}>
            <h3
              className={classes.Section}
              onClick={() => setGeneralInfo(!generalInfo)}
            >
              <span>General info</span>
              <i className="fas fa-chevron-down"></i>
            </h3>
            <p className={classes.AccordionInfo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more
            </p>
          </div>
        </div>
        <div className={classes.Accordion}>
          <div className={responsibilitesClasses.join(" ")}>
            <h3
              className={classes.Section}
              onClick={() => setResponsibilites(!responsibilites)}
            >
              <span>Responsibilites</span>
              <i className="fas fa-chevron-down"></i>
            </h3>
            <div className={classes.AccordionInfo}>
              <ul className={classes.List}>
                <li className={classes.ListItem}> - Royal Canin</li>
                <li className={classes.ListItem}> - Royal Canin</li>
                <li className={classes.ListItem}> - Royal Canin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.Accordion}>
          <div className={characteristicsClasses.join(" ")}>
            <h3
              className={classes.Section}
              onClick={() => setCharacteristics(!characteristics)}
            >
              <span>Characteristics</span>
              <i className="fas fa-chevron-down"></i>
            </h3>
            <div className={classes.AccordionInfo}>
              <ul className={classes.list}>
                <li className={classes.listItem}> - Royal Canin</li>
                <li className={classes.listItem}> - Royal Canin</li>
                <li className={classes.listItem}> - Royal Canin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.Accordion}>
          <div className={foodsClasses.join(" ")}>
            <h3 className={classes.Section} onClick={() => setFoods(!foods)}>
              <span>Foods</span>
              <i className="fas fa-chevron-down"></i>
            </h3>
            <div className={classes.AccordionInfo}>
              <ul className={classes.FoodButtons}>
                <li
                  className={suggestionButtonClasses}
                  onClick={() => {
                    toggleSort("suggestion");
                  }}
                >
                  By suggestion
                </li>
                <li
                  className={priceButtonClasses}
                  onClick={() => {
                    toggleSort("price");
                  }}
                >
                  By price
                </li>
                <li
                  className={producerButtonClasses}
                  onClick={() => {
                    toggleSort("producer");
                  }}
                >
                  By producer
                </li>
              </ul>
              <ul className={classes.Foods}>
                <li className={classes.FoodsItem}> - Royal Canin</li>
                <li className={classes.FoodsItem}> - Royal Canin</li>
                <li className={classes.FoodsItem}> - Royal Canin</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.Help}>
          <h5 style={{ width: "100%", textAlign: "center", fontSize: "30px" }}>
            Need help?
          </h5>
          <Input type="number" placeholder="Age (in month)" width="30%" />
          <Input type="textarea" placeholder="Problem" width="30%" />
          <Button text="Send" font="25px" width="25%" />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
