import React, { useState, useEffect } from "react";

function QBox(props) {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [sign, setSign] = useState(0)

    const x = Math.floor(Math.random() * 50) - 25;
    const y = Math.floor(Math.random() * 40) - 20;

    function randomQuestion() {
        const random1 = Math.floor(Math.random() * 9) + 1;
        const random2 = Math.floor(Math.random() * 9) + 1;
        setSign(Math.floor(Math.random() * 2))

        if (sign) {
            setNum1(random1)
            setNum2(random2)
        } else {
            setNum1(random1)
            setNum2(random2)
            setNum3(random1 * random2)
        }
    }

    useEffect(() => {
        randomQuestion()
    }, [])

    return (
        <div
            style={{
                padding: 10,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: "green",
                borderRadius: "50%",
                fontSize: 20,
                margin: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: (props.index === 13 || props.index === 21 || props.index === 41)
                    ? `translate(${x}px, 0px)`
                    : `translate(0px, ${y}px)`
            }}>
            {sign ? num1 + " x " + num2 : num3 + " / " + num1}
        </div>
    )
}

export default QBox