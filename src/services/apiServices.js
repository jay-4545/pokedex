import { customFetch } from "../helpers/pokedexHelper";

export function getPokemonData(page) {
  let limit = 20;
  let offset = page * limit;

  const promise = fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&&limit=${limit}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const results = data.results;
      const promises = [];

      for (const i of results) {
        const result = fetch(i.url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log("error", error);
          });
        promises.push(result);
      }
      return Promise.all(promises);
    })
    .catch((error) => {
      console.log("Error :", error);
    });
  return promise;
}

export function getSearchPokemon(query) {
  query = typeof query === "number" ? query : query.toLowerCase();
  const search = fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
    });

  return search;
}

export async function getPokemonWeaknesses(types) {
  const urls = types?.map((value) => {
    return value.type.url;
  });

  const weaknesses = [];

  try {
    for (const url of urls) {
      const response = await fetch(url);
      const data = await response.json();

      weaknesses.push(data);
    }

    return weaknesses;
  } catch (error) {
    console.log("Error: ", error);
  }
}

export function getPokemonEvolutions(url) {
  return customFetch(url).then((data) => {
    return customFetch(data?.evolution_chain?.url).then((data) => {
      let nameArray = getChain(data?.chain);
      let details = getChainDetails(nameArray);
      return details;
    });
  });
}

function getChain(chain) {
  if (!chain) return;
  let names = [];
  while (chain?.evolves_to.length !== 0) {
    names.push(chain?.species?.name);
    chain = chain?.evolves_to[0];
  }
  names.push(chain?.species?.name);
  return names;
}

function getChainDetails(names) {
  if (!names) return;
  const promiseArray = [];
  for (const value of names) {
    let arr = getSearchPokemon(value);
    promiseArray.push(arr);
  }
  return Promise.all(promiseArray);
}
