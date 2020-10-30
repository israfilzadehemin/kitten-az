import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./BigCard.module.css";
import Image from "../assets/img/BM8XYJ.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import { getBreedById } from "../api/apiCalls";

const BigCard = () => {
  const [generalInfo, setGeneralInfo] = useState(false);
  const [foods, setFoods] = useState(false);
  const [responsibilites, setResponsibilites] = useState(false);
  const [characteristics, setCharacteristics] = useState(false);
  const [sortFoods, setSortFoods] = useState("");
  const [breed, setBreed] = useState();
  const [error, setError] = useState();

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
    sortFoods === "alphabet"
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
    sortFoodBy(by);
  };

  const sortFoodBy = (by) => {
    switch (by) {
      case "alphabet":
        breed.products.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;

      case "price":
        breed.products.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;

      case "producer":
        breed.products.sort((a, b) => (a.producer.id > b.producer.id ? 1 : -1));
        break;
    }
  };

  const { breedId } = useParams();

  useEffect(() => {
    getBreedById(breedId)
      .then((resp) => {
        setBreed(resp.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
        }
      });
  }, []);

  let output = (
    <div className={classes.Container}>
      <h3 className={classes.NotFound}>Breed not found :(</h3>
    </div>
  );
  if (breed) {
    output = (
      <div className={classes.Container}>
        <div className={classes.Left}>
          <img src={Image} alt="Breed image" />
        </div>
        <div className={classes.Right}>
    <h2 className={classes.Title}>{breed.name}</h2>
          <div className={classes.Accordion}>
            <div className={generalInfoClasses.join(" ")}>
              <h3
                className={classes.Section}
                onClick={() => setGeneralInfo(!generalInfo)}
              >
                <span>General info</span>
                <i className="fas fa-chevron-down"></i>
              </h3>
              <p className={classes.AccordionInfo}>{breed.info}</p>
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
                  {breed.responsibilities.map((r) => (
                    <li key={r.id} className={classes.ListItem}>
                      - {r.name}
                    </li>
                  ))}
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
                  {breed.characteristics.map((c) => (
                    <li key={c.id} className={classes.ListItem}>
                      - {c.name}
                    </li>
                  ))}
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
                      toggleSort("alphabet");
                    }}
                  >
                    By alphabet
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
                  {breed.products.map((p) => (
                    <li key={p.id} className={classes.ListItem}>
                      - {p.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.Help}>
            <h5
              style={{ width: "100%", textAlign: "center", fontSize: "30px" }}
            >
              Need help?
            </h5>
            <Input type="number" placeholder="Age (in month)" width="30%" />
            <Input type="textarea" placeholder="Problem" width="30%" />
            <Button text="Send" font="25px" width="25%" />
          </div>
        </div>
      </div>
    );
  }
  return output;
};

export default BigCard;
