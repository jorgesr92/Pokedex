import React from "react";


function Welcome() {
  return <h1>Welcome to the Pokedex</h1>;
}

function WelcomeImg() {
  return <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>;
}

function DivHeader() {
  return (
    <div id="headerDiv">
      <Welcome />
      <WelcomeImg />
    </div>
  );
}

function App(){
  return (
    <header>
      <DivHeader />
    </header>
  )
}


export default App;
