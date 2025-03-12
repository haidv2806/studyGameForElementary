import React, { useRef, useState } from "react";
import "./Dice.css";

function Dice(props) {
    const diceRef = useRef(null);
    const [rotation, setRotation] = useState("");
    const [diceAnimationDuration, setDiceAnimationDuration] = useState("")

    async function rollDiceAndMove() {
        props.setIsPlaying(true)
        props.setStepNum([props.currentLocation])
        const random = Math.floor(Math.random() * 6) + 1;
        // const random = 1;
        props.setCurrentRollNum(random)
        await rollDice(random);

        let currentPos = props.currentLocation;
        let currentIdx = props.currentIndex;

        for (let i = 1; i <= random; i++) {
            setTimeout(() => {
                currentIdx += 1;
                if (currentIdx < props.QuestionPosition.length) {
                    currentPos = props.QuestionPosition[currentIdx];
                    props.setCurrentLocation(currentPos);
                    props.setCurrentIndex(currentIdx);
                    props.setStepNum(prev => [...prev, currentIdx])
                }
                if (i === random) {
                    if (props.shotCutStartPosition.includes(currentPos)) {
                        const index = props.shotCutStartPosition.indexOf(currentPos);
                        console.log("index: ", index);

                        setTimeout(() => {
                            props.setCurrentLocation(props.shotCutEndPosition[index]);
                            props.setCurrentIndex(props.QuestionPosition.indexOf(props.shotCutEndPosition[index]));
                            props.setStepNum(prev => [...prev, currentIdx])
                            setTimeout(() => {
                                props.setIsQuesttionModalOpen(true);
                            }, 1000);
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            props.setIsQuesttionModalOpen(true);
                        }, 1000);
                    }
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