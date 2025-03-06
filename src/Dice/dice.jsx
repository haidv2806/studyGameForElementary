import React, { useRef, useState } from "react";
import "./Dice.css";

function Dice(props) {
    const diceRef = useRef(null);
    const [rotation, setRotation] = useState("");
    const [animationTime, setAnimationTime] = useState("")

    async function randomDice() {
        const random = Math.floor(Math.random() * 6) + 1;
        await rollDice(random);
    
        console.log(random);
        
        for (let i = 0; i < random; i++) {
            setTimeout(() => {
                props.setCurrentLocation(prev => prev + 1);
            }, 1000 * (i + 1)); // Mỗi lần +1 giây
        }
    }

    const rollDice = (random) => {
        return new Promise((resolve) => {
            setAnimationTime("rolling 4s");

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

                setAnimationTime("");
                setRotation(transform);
                resolve(); // ✅ Giải quyết Promise sau khi hoàn tất
            }, 4050);
        });
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