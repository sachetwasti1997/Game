import React from "react";
import "./Dice.css";

const Dice = ({face, rolling}) => {
    return (
        <i className={`fas fa-dice-${face} dice ${rolling && "shaking"} `}/>
    )
}

export default Dice;