import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../domain/pokemon/PokemonContext";

function PokemonMainPage() {
  const pokemen = React.useContext(PokemonContext);
  const history = useHistory();

  return (
    <div>
      <div>Find your pokemon</div>
      <ul>
        {pokemen.map(pokemon => (
          <div key={pokemon.name}>
            <button
              onClick={() => {
                history.push(`/pokemon/${pokemon.name}`);
              }}>
              {pokemon.name}
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export { PokemonMainPage };
