import React from "react";
import styles from "../../../styles/home/searchBar/searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getSearchPokemon } from "../../../services/apiServices";

function Searchbar(props) {
  const { query, setQuery, setSearch } = props;
  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSearch(null);
      setQuery("");
    }
  }

  function handleSearch() {
    getSearchPokemon(query)
      .then((data) => {
        setSearch(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          placeholder="Name Or Number"
          onChange={handleChange}
          value={query}
        />
        <button className={styles.btnContainer} onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <p>Search for a Pokémon by name or using its National Pokédex number.</p>
    </div>
  );
}

export default Searchbar;
