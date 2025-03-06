import React, { useRef, useState } from "react";
import "./Dice.css";

function Dice() {
    const diceRef = useRef(null);
    const [rotation, setRotation] = useState("");
    const [animationTime, setAnimationTime] = useState("")

    const randomDice = () => {
        const random = Math.floor(Math.random() * 6) + 1;
        rollDice(random);
    };

    const rollDice = (random) => {
        setAnimationTime("rolling 4s")

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
            setAnimationTime("")
            setRotation(transform);
        }, 4050);
    };

    return (
        <div className="container">
            <div className="dice" ref={diceRef} style={{ transform: rotation, animation: animationTime }}>
                <div className={"face front"}></div>
                <div className={"face back"}></div>
                <div className={"face top"}></div>
                <div className={"face bottom"}></div>
                <div className={"face right"}></div>
                <div className={"face left"}></div>
            </div>

            <button className="roll" onClick={randomDice}>
                Roll Dice
            </button>
        </div>
    );
}

export default Dice;