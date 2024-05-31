import React, { useEffect, useState } from "react";
import EvolutionCard from "./EvolutionCard";
import styles from "../../../styles/pokemonDetails/evolutionRow/evolutionRow.module.css";
import { getPokemonEvolutions } from "../../../services/apiServices";

function EvolutionRow(props) {
  const { pokemon, setPokemon } = props;

  const [evolution, setEvolution] = useState(null);
  useEffect(() => {
    getPokemonEvolutions(pokemon?.species?.url).then((data) => {
      setEvolution(data);
    });
  }, [pokemon?.species?.url]);

  if (!evolution) return null;

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h2>Evolutions</h2>
      </div>
      <div className={styles.rowContainer}>
        {evolution.map((value, index) => {
          return <EvolutionCard key={index} data={value} />;
        })}
      </div>
    </div>
  );
}

export default EvolutionRow;
