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
    <div
      className={`${styles.container} flex flex-col w-full mx-auto justify-center md:items-start items-center p-8 gap-8`}
    >
      <PokemonCard pokemon={pokemon} />
      <div className={`${styles.btn} md:ml-24 ml-0`} onClick={goBack}>
        <button>Go Back</button>
      </div>
    </div>
  );
}

export default SearchPokemon;
