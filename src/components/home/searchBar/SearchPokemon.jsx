import React from "react";
import PokemonCard from "../pokemonList/PokemonCard";
import styles from "../../../styles/home/searchBar/searchPokemon.module.css";

function SearchPokemon(props) {
  const { pokemon, setQuery, setSearch } = props;

  function goBack() {
    setQuery("");
    setSearch(null);
  }
  return (
    <div className={styles.container}>
      <PokemonCard pokemon={pokemon} />
      <div className={styles.btn} onClick={goBack}>
        <button>Go Back</button>
      </div>
    </div>
  );
}

export default SearchPokemon;
