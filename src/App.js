import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import PokemonMoves from "./components/PokemonMoves";

const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

const logWhenClicked = () => {
  console.log("Button was clicked!");
}

const App = () => (
  <div>
    <Logo appName="Pokedex" handleClick={logWhenClicked} />
    <BestPokemon arrAbilities = {abilities} />
    <CaughtPokemon date = {date} />
    <PokemonMoves />
  </div>
);


export default App;
