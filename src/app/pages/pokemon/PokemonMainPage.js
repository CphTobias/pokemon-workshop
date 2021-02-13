import React from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../domain/pokemon/PokemonContext";

function PokemonMainPage() {
  const pokemen = React.useContext(PokemonContext);
  const history = useHistory();
  const [search, setSearch] = React.useState("");
  const [toShowPokemen, setToShowPokemen] = React.useState([]);

  React.useEffect(() => {
    const filteredPokemen = pokemen.filter(
      pokemon => !pokemon.name.toLowerCase().indexOf(search.toLowerCase())
    );
    setToShowPokemen(filteredPokemen);
  }, [pokemen, search]);

  function handlePokemonSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h2>Find your pokemon</h2>
      <div>
        <input
          style={{ padding: "10px", margin: "10px 0px", width: "600px" }}
          type="search"
          name="search"
          placeholder="Search for pokemon"
          value={search}
          onChange={handlePokemonSearch}
        />
        {search &&
          toShowPokemen.map(pokemon => (
            <div key={pokemon.name}>
              <button
                style={{
                  width: "600px",
                  padding: "5px",
                  margin: "2px 0",
                }}
                onClick={() => {
                  history.push(`/pokemon/${pokemon.name}`);
                }}>
                {pokemon.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export { PokemonMainPage };
