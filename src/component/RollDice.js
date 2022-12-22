import Dice from "./Dice";
import "./RollDice.css";
import {useState} from "react";
import {NumberGenerator} from "./NumberGenerator";
import { questions }  from "./Questions";
import Fader from "./Fader";

const RollDice = () => {

    const faces = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six'
    };

    const [state, setState] = useState({
        die1: 'one',
        die2: 'one',
        die3: 'one',
        die4: 'one',
        rolling: false,
        question: 4,
        que: ""
    });

    const getQuestion = (index) => {
        setTimeout(() => {
            return questions[index]
        }, 1000)
    }

    const {die1, die2, die3, die4, rolling} = state;

    const roll = () => {
        const dice1 = Math.floor(1 + Math.random() * 6);
        const dice2 = Math.floor(1 + Math.random() * 6);
        const dice3 = Math.floor(1 + Math.random() * 6);
        const dice4 = Math.floor(1 + Math.random() * 6);

        setState({
            rolling: true,
            die1: faces[dice1],
            die2: faces[dice2],
            die3: faces[dice3],
            die4: faces[dice4],
        });
        setTimeout(() => {
            setState((prevState) => ({...prevState, rolling: false, question: dice4+dice3+dice1+dice2, que: questions[dice2+dice3+dice4+dice1]}));
        }, 1000)
    }
    const handleBtn = rolling ?
        'RollDice-rolling' : '';
    return(
        <>
        <div className={"RollDice"}>
            <div className={"RollDice-container"}>
                <Dice face={String(die1)} rolling={rolling}/>
                <Dice face={String(die2)} rolling={rolling}/>
                <Dice face={String(die3)} rolling={rolling}/>
                <Dice face={String(die4)} rolling={rolling}/>
            </div>
            <button className={handleBtn} onClick={roll} disabled={rolling}>
                {rolling? "Rolling...": "Roll Dice"}
            </button>
            <h2 style={{fontSize: '75px', color:'pink'}}>
                <NumberGenerator n={state.question}/>
            </h2>
        </div>
            {state.que && state.que !== "" && <Fader text={state.que}/>}
        </>
    )
}

export default RollDice;