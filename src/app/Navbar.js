import React from "react";
import { NavLink } from "react-router-dom";

const activeLink = {
  color: "lightblue",
};

function Navbar() {
  return (
    <>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <NavLink exact to="/" activeStyle={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokemon" activeStyle={activeLink}>
            Pokemon
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export { Navbar };
