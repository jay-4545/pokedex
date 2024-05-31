import React from "react";
import styles from "../../styles/pokemonDetails/navigation.module.css";
import { useNavigate } from "react-router-dom";
import { getSearchPokemon } from "../../services/apiServices";

function Navigation({ pokemon, setPokemon }) {
  const navigate = useNavigate();
  function handlePrev() {
    if ((pokemon.id > 1 && pokemon.id <= 1025) || pokemon.id > 10001) {
      getSearchPokemon(pokemon.id - 1).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 1) {
      getSearchPokemon(10277).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 10001) {
      getSearchPokemon(1025).then((data) => {
        setPokemon(data);
      });
    }
  }

  function handleGoBack() {
    navigate(-1);
  }

  function handleNext() {
    if (pokemon.id < 1024) {
      getSearchPokemon(pokemon.id + 1).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 1025) {
      getSearchPokemon(10001).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 10277) {
      getSearchPokemon(1).then((data) => {
        setPokemon(data);
      });
    } else {
      getSearchPokemon(pokemon.id + 1).then((data) => {
        setPokemon(data);
      });
    }
  }
  return (
    <div className={styles.btnContainer}>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Navigation;
