import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { getPokemonWeaknesses } from "../../services/apiServices";
import { getWeaknesses } from "../../helpers/pokedexHelper";
import styles from "../../styles/pokemonDetails/statsRow.module.css";
import Tag from "../home/pokemonList/pagination/tag/Tag";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StatsRow(props) {
  const { pokemon } = props;

  const [weaknesses, setWeaknesses] = useState(null);

  useEffect(() => {
    getPokemonWeaknesses(pokemon?.types).then((data) => {
      const temp = getWeaknesses(data);
      setWeaknesses(temp);
    });
  }, [pokemon?.types]);

  const options = {
    title: {
      text: "Stats",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "HP", y: pokemon?.stats[0].base_stat || 0 },
          { label: "Attack", y: pokemon?.stats[1].base_stat || 0 },
          { label: "Defense", y: pokemon?.stats[2].base_stat || 0 },
          { label: "Special Attack", y: pokemon?.stats[3].base_stat || 0 },
          { label: "Special Defense", y: pokemon?.stats[4].base_stat || 0 },
          { label: "Speed", y: pokemon?.stats[5].base_stat || 0 },
        ],
      },
    ],
  };

  if (!pokemon) return null;

  return (
    <div className={`${styles.containnerMain} grid-cols-1 lg:grid-cols-2 `}>
      <div className={styles.stats}>
        <CanvasJSChart options={options} />
      </div>
      <div className={styles.containerInner}>
        <div className={styles.typeContainer}>
          <h3>Types</h3>
          <div className={styles.types}>
            {pokemon.types.map((value, index) => {
              return <Tag key={index} type={value.type.name} />;
            })}
          </div>
        </div>
        <div className={styles.weaknessContainer}>
          <h3>Weaknesses</h3>
          <div className={styles.weakness}>
            {weaknesses?.map((value, index) => {
              return <Tag key={index} type={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsRow;
