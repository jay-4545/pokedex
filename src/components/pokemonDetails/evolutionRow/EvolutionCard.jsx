import React from "react";
import styles from "../../../styles/pokemonDetails/evolutionRow/evolutionCard.module.css";
import {
  getCapitilize,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokedexHelper";
import { useNavigate } from "react-router-dom";
import Tag from "../../home/pokemonList/pagination/tag/Tag";

function EvolutionCard(props) {
  const { data } = props;
  const navigate = useNavigate();

  function goDetails() {
    navigate(`/pokemon/${data.name}`);
    window.scroll(0, 0);
  }

  if (!data) return null;
  return (
    <div className={styles.cardContainer} onClick={goDetails}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(data)} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.nameNumber}>
          <p>{getCapitilize(data.name)}</p>
          <p>{getPokemonNumber(data.id)}</p>
        </div>
        <div className={styles.tagContainer}>
          {data.types.map((value, index) => {
            return <Tag type={value.type.name} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EvolutionCard;
