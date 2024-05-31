import React, { useState } from "react";
import Searchbar from "../components/home/searchBar/Searchbar";
import PokemonList from "../components/home/pokemonList/PokemonList";
import SearchPokemon from "../components/home/searchBar/SearchPokemon";

function Home() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(null);
  return (
    <div>
      <Searchbar query={query} setQuery={setQuery} setSearch={setSearch} />
      {search ? (
        <SearchPokemon
          setQuery={setQuery}
          setSearch={setSearch}
          pokemon={search}
        />
      ) : (
        <PokemonList />
      )}
    </div>
  );
}

export default Home;
