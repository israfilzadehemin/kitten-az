import classes from "./CardList.module.css";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { getAllBreeds, getBreedsByLetter } from "../api/apiCalls";
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

  const loadAllBreeds = (newPage) => {
    getAllBreeds(newPage)
      .then((resp) => {
        setPage(resp.data);
      })
      .catch((err) => {
        setPage({
          content: [],
        });
      });
  };

  const loadBreedsByLetter = (letter) => {
    getBreedsByLetter(letter)
      .then((resp) => {
        setPage({
          content: resp.data,
        });
      })
      .catch((err) => {
        setPage({
          content: [],
        });
      });
  };

  let breedContainer = <div className={classes.NotFound}>NOT FOUND </div>;

  if (page.content.length != 0) {
    breedContainer = page.content.map((b) => (
      <Card
        key={b.name}
        name={b.name}
        category={b.category.name}
        image={b.image}
      />
    ));
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Left}>
        <SearchBar
          onClickLetter={loadBreedsByLetter}
          onClickShowAll={() => loadAllBreeds(0)}
        />
      </div>
      <div className={classes.Right}>{breedContainer}</div>
    </div>
  );
};

export default CardList;
