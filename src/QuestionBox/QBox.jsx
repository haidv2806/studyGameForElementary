import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function QBox(props) {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [sign, setSign] = useState(0)
    const [answer, setAnswer] = useState()
    const [feedback, setFeedback] = useState("");
    const elementRef = useRef(null);

    const [y, setY] = useState(Math.floor(Math.random() * 40) - 20)

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

    useEffect(() => {
        if (elementRef.current) {
            props.setListQusettionOffsetPosision(prev =>
                prev.map((item, i) =>
                    props.QuestionPosition[i] === props.index
                        ? {
                            x: props.index === 13 || props.index === 41
                                ? elementRef.current.offsetLeft + 30
                                : props.index === 21
                                    ? elementRef.current.offsetLeft - 30
                                    : elementRef.current.offsetLeft,
                            y: elementRef.current.offsetTop + y - 10
                        }
                        : item
                )
            );
        }
    }, [props.index]);

    function AnswerQuestion(input) {
        const isCorrect = sign ? input == num1 * num2 : input == num2;

        if (!isCorrect) {
            const reversedSteps = [...props.stepNum].reverse(); // Đảo mảng mà không ảnh hưởng mảng gốc

            for (let i = 0; i < reversedSteps.length; i++) {
                setTimeout(() => {
                    props.setCurrentIndex(prevIndex => {
                        if (i < reversedSteps.length) {
                            const nextIndex = reversedSteps[i];
                            props.setCurrentLocation(props.QuestionPosition[nextIndex]);
                            return nextIndex;
                        }
                        return prevIndex;
                    });
                }, 1000 * (i + 1));
            }

            props.setNumHeart(prevHearts => {
                const newHearts = [...prevHearts];
                const index = newHearts.indexOf(1);
                if (index !== -1) {
                    newHearts[index] = 0;
                }

                // Kiểm tra nếu không còn số 1 nào thì hiển thị alert
                if (!newHearts.includes(1)) {
                    props.setLossIsAlertOpen(true)
                }

                return newHearts;
            });
        }

        if (isCorrect && props.index == 1) {
            props.setWinIsAlertOpen(true)
        }

        setFeedback(isCorrect ? "Bạn đã trả lời chính xác" : "Rất tiếc gần đúng rồi");

        props.setIsPlaying(false)
    }

    function handleChange(event) {
        setAnswer(event.target.value)
    }

    return (
        <div
            ref={elementRef}
            style={{
                padding: 10,
                paddingLeft: 15,
                paddingRight: 15,
                backgroundColor: props.index == props.currentLocation ? "green" : "white",
                borderRadius: "50%",
                border: "1px solid black",
                fontSize: 20,
                margin: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: (props.index === 13 || props.index === 41)
                    ? `translate(30px, 0px)`
                    : props.index === 21 ? `translate(-30px, 0px)`
                        : `translate(0px, ${y}px)`
            }}>

            {sign ? num1 + " x " + num2 : num3 + " / " + num1}

            <Modal
                isOpen={props.index == props.currentLocation && props.isQuesttionModalOpen}
                // onRequestClose={() => props.setIsQuesttionModalOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        backdropFilter: "blur(10px)",
                        zIndex: 1000
                    },
                    content: {
                        width: "60%",
                        height: "fit-content", // Chiều cao vừa với nội dung
                        margin: "auto",
                        padding: "20px",
                        background: "rgba(255, 255, 255, 0.3)",
                        borderRadius: "10px",
                        border: "none"
                    }
                }}
            >
                <div
                    style={{
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: 20,
                    }}>

                    <h1>Bạn phải trả lời câu hỏi sau</h1>

                    <h2>{sign ? num1 + " x " + num2 : num3 + " / " + num1}</h2>

                    <input
                        onChange={handleChange}
                        value={answer}
                        type="number"
                        placeholder="Câu trả lời của bạn là?"
                        style={{
                            fontSize: "20px",
                            padding: "5px"
                        }}
                    />

                    {!feedback &&
                        <button
                            onClick={() => AnswerQuestion(answer)}
                            style={{
                                fontSize: 20,
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: "green"
                            }}
                        >
                            xác nhận
                        </button>
                    }


                    {feedback && <div>{feedback}</div>}


                    {feedback &&
                        <button
                            onClick={() => (
                                props.setIsQuesttionModalOpen(false),
                                setFeedback(""),
                                setAnswer()
                            )}
                            style={{
                                fontSize: 20,
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: "green"
                            }}
                        >
                            Tiếp tục
                        </button>
                    }

                </div>
            </Modal>
        </div>
    )
}

export default QBox