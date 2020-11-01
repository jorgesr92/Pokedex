import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import DivHeader from "./components/DivHeader";

const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

const App = () => (
  <header>
    <DivHeader />
    <Logo appName="Pokedex" />
    <BestPokemon arrAbilities = {abilities} />
    <CaughtPokemon date = {date} />
  </header>
);


export default App;
