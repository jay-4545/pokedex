import React from "react";
import { getCapitilize, getPokemonNumber } from "../../helpers/pokedexHelper";
import styles from "../../styles/pokemonDetails/title.module.css";

function Title(props) {
  const { pokemon } = props;

  if (!pokemon) return null;
  return (
    <div className={styles.titleContainer}>
      <p className={styles.name}>{getCapitilize(pokemon.name)}</p>
      <p className={styles.number}>{getPokemonNumber(pokemon.id)}</p>
    </div>
  );
}

export default Title;
