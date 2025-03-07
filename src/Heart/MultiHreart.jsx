import React from "react";
import AHeart from "./AHeart";

function MultiHeart(props) {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" , paddingTop: 20, paddingBottom: 50}}>
            {props.numHeart.map((index, item) => (
                <AHeart key={item} isFull={index}/> 
            ))}
        </div>
    );
}

export default MultiHeart;