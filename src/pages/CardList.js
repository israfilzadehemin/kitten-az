import classes from "./CardList.module.css";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { getAllBreeds } from "../api/apiCalls";
import { useSSR } from "react-i18next";

const CardList = () => {
  const [page, setPage] = useState({
    content: [],
    size: 10,
    number: 0,
  });

  const { content: breeds, last, first } = page;

  useEffect(() => {
    loadAllBreeds();
  }, []);

  const loadAllBreeds = (page) => {
    getAllBreeds(page)
      .then((resp) => {
        setPage(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <SearchBar />
      </div>
      <div className={classes.Right}>
        {breeds.map((b) => (
          <Card name={b.name} category={b.category.name} image={b.image} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
