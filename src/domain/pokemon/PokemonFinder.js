function findPokemon(name, pokemen) {
  return pokemen.find(pokemon => pokemon.name === name);
}

async function fetchPokemon(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export { findPokemon, fetchPokemon };
