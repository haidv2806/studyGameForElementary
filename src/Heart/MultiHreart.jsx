import React from "react";
import AHeart from "./AHeart";

function MultiHeart(props) {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {props.numHeart.map((index, item) => (
                <AHeart key={item} isFull={index}/> 
            ))}
        </div>
    );
}

export default MultiHeart;