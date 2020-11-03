import React from "react";


const Welcome = (props) => <h1>Welcome to the {props.name} </h1>;

const WelcomeImg = (props) => <img onClick={props.logWhenClicked} alt="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>;

const Logo = (props) => {
    return (
        <header id="headerDiv">
            <Welcome name = {props.appName}/>
            <WelcomeImg logWhenClicked = {props.handleClick}/>
        </header>
    )
};

export default Logo;
