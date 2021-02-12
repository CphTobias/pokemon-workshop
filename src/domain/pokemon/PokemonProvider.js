import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

async function fetchPokemen(url) {
  const res = await fetch(url);
  return await res.json();
}

function PokemonProvider({ children }) {
  const [pokemen, setPokemen] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemen("https://pokeapi.co/api/v2/pokemon/?limit=30")
      .then(data => {
        setPokemen(data.results);
      })
      .catch(err => console.error(err));
    setLoading(false);
    return () => {
      setLoading(true);
      setPokemen(null);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>loading pokemons</div>
      ) : (
        <PokemonContext.Provider value={pokemen}>
          {children}
        </PokemonContext.Provider>
      )}
    </>
  );
}

export { PokemonProvider };
