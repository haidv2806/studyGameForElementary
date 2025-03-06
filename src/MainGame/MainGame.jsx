import React, { useState } from "react";
import MultiQBox from "../QuestionBox/MultiQBox";
import Dice from "../Dice/dice";
import ExplanMark from "../Explan/ExplanMark";

function MainGame() {
    const [currentLocation, setCurrentLocation] = useState(0)
    console.log(currentLocation);
    

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