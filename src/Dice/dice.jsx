import React, { useRef, useState } from "react";
import "./Dice.css";

function Dice(props) {
    const diceRef = useRef(null);
    const [rotation, setRotation] = useState("");
    const [diceAnimationDuration, setDiceAnimationDuration] = useState("")
    
    async function rollDiceAndMove() {
        props.setIsPlaying(true)
        const random = Math.floor(Math.random() * 6) + 1;
        props.setCurrentRollNum(random)
        await rollDice(random);
    
        for (let i = 1; i <= random; i++) {
            setTimeout(() => {
                props.setCurrentIndex(prevIndex => {
                    const nextIndex = prevIndex + 1;
                    if (nextIndex < props.QuestionPosition.length) {
                        props.setCurrentLocation(props.QuestionPosition[nextIndex]);
                    }
                    return nextIndex;
                });
        
                if (i === random) {
                    setTimeout(() => {
                        props.setIsQuesttionModalOpen(true);
                    }, 1000);
                }
            }, 1000 * i);
        }
    }

    const rollDice = (random) => {
        return new Promise((resolve) => {
            setDiceAnimationDuration("rolling 4s");

            setTimeout(() => {
                let transform = "";

                switch (random) {
                    case 1:
                        transform = "rotateX(0deg) rotateY(0deg)";
                        break;
                    case 6:
                        transform = "rotateX(180deg) rotateY(0deg)";
                        break;
                    case 2:
                        transform = "rotateX(-90deg) rotateY(0deg)";
                        break;
                    case 5:
                        transform = "rotateX(90deg) rotateY(0deg)";
                        break;
                    case 3:
                        transform = "rotateX(0deg) rotateY(90deg)";
                        break;
                    case 4:
                        transform = "rotateX(0deg) rotateY(-90deg)";
                        break;
                    default:
                        break;
                }

                setDiceAnimationDuration("");
                setRotation(transform);
                resolve();
            }, 4050);
        });
    };

    return (
        <div className="container">
            <div className="dice" ref={diceRef} style={{ transform: rotation, animation: diceAnimationDuration }}>
                <div className={"face front"}></div>
                <div className={"face back"}></div>
                <div className={"face top"}></div>
                <div className={"face bottom"}></div>
                <div className={"face right"}></div>
                <div className={"face left"}></div>
            </div>

            <button className="roll" onClick={() => !props.isPlaying && rollDiceAndMove()}>
                Roll Dice
            </button>
        </div>
    );
}

export default Dice;