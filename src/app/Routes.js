import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { PokemonMainPage } from "./pages/pokemon/PokemonMainPage";
import { PokemonPage } from "./pages/pokemon/PokemonPage";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon">
            <PokemonMainPage />
          </Route>
          <Route path="/pokemon/:name">
            <PokemonPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export { Routes };
