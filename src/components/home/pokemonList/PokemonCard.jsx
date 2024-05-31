import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../styles/home/pokemonList/pokemonList.module.css";
import {
  getCapitilize,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokedexHelper";
import Tag from "./pagination/tag/Tag";

function PokemonCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();
  // console.log("navigate", navigate);
  function handleDetail() {
    navigate(`pokemon/${pokemon.name}`);
  }

  if (!pokemon) return null;
  return (
    <div className={styles.cardConntainer} onClick={handleDetail}>
      <div className={styles.imgConntainer}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.descContainer}>
        <p>{getPokemonNumber(pokemon.id)}</p>
        <p className={styles.name}>{getCapitilize(pokemon.name)}</p>
        {pokemon.types.map((value, index) => {
          return <Tag key={index} type={value.type.name} />;
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
