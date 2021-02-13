import React from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../../../domain/pokemon/PokemonContext";
import {
  fetchPokemon,
  findPokemon,
} from "../../../domain/pokemon/PokemonFinder";

function PokemonPage() {
  const params = useParams();
  const pokemonList = React.useContext(PokemonContext);
  const foundPokemon = findPokemon(params.name, pokemonList);
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    fetchPokemon(foundPokemon.url).then(data => setPokemon(data));
    return () => {
      setPokemon(null);
    };
  }, [foundPokemon]);

  return (
    <div>
      {pokemon === null ? (
        "loading..."
      ) : (
        <div>
          <h1>Pokemon: {pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt="PokemonImage" />
          <div>
            <h3>Stats:</h3>
            <ol>
              {pokemon.stats.map((level, idx) => (
                <li key={idx}>
                  <ul>
                    <li>Base stat: {level.base_stat}</li>
                    <li>Effort: {level.effort}</li>
                    <li>Stat name: {level.stat.name}</li>
                  </ul>
                  <br />
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export { PokemonPage };
