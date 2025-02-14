import React, { useEffect, useState } from "react";
import styles from "../../styles/pokemonDetails/infoRow.module.css";
import {
  customFetch,
  getPokemonAbilities,
  getPokemonCategory,
  getPokemonImage,
  pokemonDataDesc,
} from "../../helpers/pokedexHelper";

function InfoRow(props) {
  const { pokemon } = props;

  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    customFetch(pokemon?.species?.url).then((data) => {
      setSpeciesDetails(data);
    });
  }, [pokemon?.species?.url]);

  if (!pokemon) return null;
  return (
    <div className={`${styles.mainContainer} grid grid-cols-1 lg:grid-cols-2`}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <div className={`${styles.desc}`}>
          <p>{pokemonDataDesc(speciesDetails?.flavor_text_entries)}</p>
        </div>
        <div
          className={`${styles.tableContainer} flex-wrap md:mr-[100px] mr-0 w-full`}
        >
          <tr>
            <td>
              <p>Weight</p>
              <p>{pokemon.weight}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Height</p>
              <p>{pokemon.height}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Abilities</p>
              <p>{getPokemonAbilities(pokemon.abilities)}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Catagory</p>
              <p>{getPokemonCategory(speciesDetails?.genera)}</p>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default InfoRow;
