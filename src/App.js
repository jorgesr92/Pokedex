import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";

const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

const logWhenClicked = () => {
  console.log("Button was clicked!");
}

const App = () => (
  <header>
    <Logo appName="Pokedex" handleClick={logWhenClicked} />
    <BestPokemon arrAbilities = {abilities} />
    <CaughtPokemon date = {date} />
  </header>
);


export default App;
