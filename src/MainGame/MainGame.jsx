import React from "react";
import MultiQBox from "../QuestionBox/MultiQBox";
import Dice from "../Dice/dice";

function MainGame() {
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Dice/>
            <MultiQBox />
        </div>
    )
}

export default MainGame