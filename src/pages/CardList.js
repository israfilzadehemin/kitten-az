import classes from "./CardList.module.css";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { getAllBreeds, getBreedsByLetter } from "../api/apiCalls";
import Spinner from "../components/Spinner";

const CardList = () => {
  const [page, setPage] = useState({
    content: [],
    size: 10,
    number: 0,
  });

  const [loading, setLoading] = useState(false);

  const { content: breeds, last, first } = page;

  useEffect(() => {
    loadAllBreeds();
  }, []);

  const loadAllBreeds = (newPage) => {
    setLoading(true);
    getAllBreeds(newPage)
      .then((resp) => {
        setLoading(false);
        setPage(resp.data);
      })
      .catch((err) => {
        setLoading(false);
        setPage({
          content: [],
        });
      });
  };

  const loadBreedsByLetter = (letter) => {
    setLoading(true);
    getBreedsByLetter(letter)
      .then((resp) => {
        setLoading(false);
        setPage({
          content: resp.data,
        });
      })
      .catch((err) => {
        setLoading(false);
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

  if (loading === true) {
    breedContainer = <Spinner />;
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
