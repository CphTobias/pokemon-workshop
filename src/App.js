import React from "react";
import { Routes } from "./app/Routes";
import { PokemonProvider } from "./domain/pokemon/PokemonProvider";

function App() {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
}

export default App;
