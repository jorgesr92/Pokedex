import React from "react";


const BestPokemon = () => {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
    return (
      <div>
        <p>My favourite Pokemon is Squirtle</p>
        <ul>
          {abilities.map((ability) => (
            <li key={ability}>{ability}</li>
          ))}
        </ul>
      </div>
    )
  };

  export default BestPokemon;