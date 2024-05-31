export function getPokemonImage(pokemon) {
  if (!pokemon) return null;
  return pokemon?.sprites?.other["official-artwork"]?.front_default;
}

export function getPokemonNumber(id) {
  if (!id) return null;
  return "#" + id.toString().padStart(4, "0");
}

export function getCapitilize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

export function getWeaknesses(data) {
  if (!data) return;
  let weaknessArray = [];
  let strengthArray = [];
  for (let value of data) {
    let weakness = value.damage_relations.double_damage_from;
    let strength = value.damage_relations.double_damage_to;

    weaknessArray.push(weakness);
    strengthArray.push(strength);
    strength.push({ name: value.name });
  }

  let weakness1 = weaknessArray.flat().map((value) => {
    return value.name;
  });

  let strength1 = strengthArray.flat().map((value) => {
    return value.name;
  });

  weakness1 = weakness1.filter((value) => {
    return !strength1.includes(value);
  });

  return weakness1;
}

export function customFetch(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // console.log("Error: ", error);
    });
}

export function getPokemonAbilities(abilities) {
  if (!abilities) return null;
  return abilities.map((value) => value.ability.name).join(", ");
}

export function pokemonDataDesc(text) {
  if (!text) return "";
  return text
    .find((value) => value.language.name === "en")
    .flavor_text.replaceAll("\f", " ");
}

export function getPokemonCategory(genera) {
  if (!genera) return "";

  const genus = genera.find((value) => {
    if (value.language.name === "en") {
      return value.genus;
    }
    return false;
  });

  if (genus) return genus.genus;

  return "N/A";
}
