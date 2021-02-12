import React from "react";
import { useParams } from "react-router-dom";
import findPokemon from "../../../domain/pokemon/findPokemon";
import { PokemonContext } from "../../../domain/pokemon/PokemonContext";

async function fetchMe(url) {
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

function PokemonPage() {
  const params = useParams();
  const pokemonList = React.useContext(PokemonContext);
  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    console.log(params.name);
    console.log(pokemonList);
    const foundPokemon = findPokemon(params.name, pokemonList);
    fetchMe(foundPokemon.url).then(data => setPokemon(data));
    return () => {
      setPokemon(null);
    };
  }, [params, pokemonList]);

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
