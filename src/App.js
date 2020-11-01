import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
import DivHeader from "./components/DivHeader";


const App = () => (
  <header>
    <DivHeader />
    <Logo />
    <BestPokemon />
    <CaughtPokemon />
  </header>
);


export default App;
