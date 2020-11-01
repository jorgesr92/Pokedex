import React from "react";

const Welcome = () => <h1>Welcome to the Pokedex</h1>;

const WelcomeImg = () => <img alt="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>;

const DivHeader = () => (
  <div id="headerDiv">
    <Welcome />
    <WelcomeImg />
  </div>
);

export default DivHeader;