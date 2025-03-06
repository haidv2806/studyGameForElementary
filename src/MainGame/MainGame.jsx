import React, { useState, useEffect } from "react";
import MultiQBox from "../QuestionBox/MultiQBox";
import Dice from "../Dice/dice";
import ExplanMark from "../Explan/ExplanMark";

function MainGame() {
    const [currentLocation, setCurrentLocation] = useState(0)
    console.log(currentLocation);
    // const all = [48, 47, 46, 45, 44, 43, 41, 34, 33, 32, 31, 30, 29, 28, 21, 20, 19, 18, 17, 16, 15, 14, 13, 6, 5, 4, 3, 2, 1]
    const alls = [43, 44, 45, 46, 47, 48, 41, 34, 33, 32, 31, 30, 29, 28, 21, 14, 15, 16, 17, 18, 19, 20, 13, 6, 5, 4, 3, 2, 1]

    useEffect(() => {
        for (let i = 0; i < alls.length; i++) {
            setTimeout(((index) => {
                return () => {
                    setCurrentLocation(alls[index]);
                };
            })(i), 1000 * (i + 1)); // Mỗi lần +1 giây
        }
    }, [])


    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100vh" }}>
            <div>
                <Dice
                    currentLocation={currentLocation}
                    setCurrentLocation={setCurrentLocation}
                />
            </div>

            <MultiQBox
                currentLocation={currentLocation}
            />

            <div>
                <ExplanMark />
            </div>
        </div>
    )
}

export default MainGame