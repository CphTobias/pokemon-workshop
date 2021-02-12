function findPokemon(name, pokemen) {
  return pokemen.find(pokemon => pokemon.name === name);
}

export default findPokemon;
