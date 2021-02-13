import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { PokemonContext } from "../../../domain/pokemon/PokemonContext";
import {
  fetchPokemon,
  findPokemon,
} from "../../../domain/pokemon/PokemonFinder";

function PokemonPage() {
  const params = useParams();
  const history = useHistory();
  const pokemonList = React.useContext(PokemonContext);
  const foundPokemon = findPokemon(params.name, pokemonList);
  const [pokemon, setPokemon] = React.useState(null);
  const [pokemonInfo, setPokemonInfo] = React.useState(null);
  const [showInfo, setShowInfo] = React.useState(false);

  React.useEffect(() => {
    fetchPokemon(foundPokemon.url).then(data => setPokemon(data));
    return () => {
      setPokemon(null);
    };
  }, [foundPokemon]);

  async function findPokemonInfo() {
    try {
      if (!pokemonInfo) {
        const info = await fetchPokemon(pokemon.species.url);
        setPokemonInfo(info);
      }
      setShowInfo(true);
    } catch (err) {
      console.log(err);
    }
  }

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
          <div>
            {showInfo ? (
              <button onClick={() => setShowInfo(false)}>Less info</button>
            ) : (
              <button onClick={findPokemonInfo}>More info</button>
            )}
            {showInfo && (
              <div>
                <h3>Pokemon info</h3>
                <p>Base happiness: {pokemonInfo.base_happiness}</p>
                <p>Capture rate: {pokemonInfo.capture_rate}</p>
                <p>Color: {pokemonInfo.color.name}</p>
                <h4>Egg groups:</h4>
                <ul>
                  {pokemonInfo.egg_groups.map(egg => (
                    <li>{egg.name}</li>
                  ))}
                </ul>
                <p>
                  Evolves from:{" "}
                  {pokemonInfo.evolves_from_species ? (
                    <button
                      onClick={() =>
                        history.push(`${pokemonInfo.evolves_from_species.name}`)
                      }>
                      {pokemonInfo.evolves_from_species.name}
                    </button>
                  ) : (
                    "No prior evolution"
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { PokemonPage };
