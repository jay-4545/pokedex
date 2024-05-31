import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/pages/pokemonDetails.module.css";
import Navigation from "../components/pokemonDetails/Navigation";
import Title from "../components/pokemonDetails/Title";
import { getSearchPokemon } from "../services/apiServices";
import InfoRow from "../components/pokemonDetails/InfoRow";
import StatsRow from "../components/pokemonDetails/StatsRow";
import EvolutionRow from "../components/pokemonDetails/evolutionRow/EvolutionRow";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  console.log(pokemon);

  useEffect(() => {
    getSearchPokemon(params.name)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [params.name]);

  return (
    <div className={styles.container}>
      <Navigation pokemon={pokemon} setPokemon={setPokemon} />
      <Title pokemon={pokemon} />
      <InfoRow pokemon={pokemon} />
      <StatsRow pokemon={pokemon} />
      <EvolutionRow pokemon={pokemon} setPokemon={setPokemon} />
    </div>
  );
}

export default PokemonDetails;
