import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../../styles/home/pokemonList/pokemonList.module.css";
import { getPokemonData } from "../../../services/apiServices";
import Pagination from "./pagination/Pagination";

function PokemonList() {
  const [pokemon, setPokemon] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPokemonData(page)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, [page]);

  if (!pokemon) return null;
  return (
    <>
      <div className={styles.listContainer}>
        {pokemon.map((value, index) => {
          return <PokemonCard key={index} pokemon={value} />;
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default PokemonList;
