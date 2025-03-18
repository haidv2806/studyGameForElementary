import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function QBox(props) {
    const [isFirstEnter, setIsFirstEnter] = useState(true);
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [sign, setSign] = useState(0)
    const [answer, setAnswer] = useState()
    const [feedback, setFeedback] = useState("");
    const elementRef = useRef(null);

    const [y, setY] = useState(Math.floor(Math.random() * 40) - 20)

    function randomQuestion() {
        const random1 = Math.floor(Math.random() * 4) + 2;
        const random2 = Math.floor(Math.random() * 4) + 2;
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

        setFeedback(isCorrect ? "Correct.png" : "Wrong.png");

        if (isCorrect) {
            const correctAudio = new Audio("./Correct_answer.mp3");
            correctAudio.play().catch(error => console.log("Lỗi phát âm thanh: ", error));
        } else {
            const wrongAudio = new Audio("./Wrong_answer.mp3");
            wrongAudio.play().catch(error => console.log("Lỗi phát âm thanh: ", error));
        }
    }

    function returnPosition(input) {
        const isCorrect = sign ? input == num1 * num2 : input == num2;

        if (!isCorrect) {
            const reversedSteps = [...props.stepNum].reverse(); // Đảo mảng mà không ảnh hưởng mảng gốc

            for (let i = 0; i < reversedSteps.length; i++) {
                setTimeout(() => {
                    props.setCurrentIndex(prevIndex => {
                        if (i < reversedSteps.length) {
                            const nextIndex = reversedSteps[i];
                            if (nextIndex === 42) {
                                props.setCurrentIndex(0);
                                props.setCurrentLocation(props.QuestionPosition[0]);
                            } else {
                                props.setCurrentIndex(nextIndex);
                                props.setCurrentLocation(props.QuestionPosition[nextIndex]);
                            }

                            return nextIndex;
                        }
                        return prevIndex;
                    });
                }, 1000 * (i + 1));
            }

            setTimeout(() => {
                props.setIsPlaying(false)
            }, 1000 * (reversedSteps.length + 2));
        } else {
            props.setIsPlaying(false)
        }
    }

    function handleChange(event) {
        setAnswer(event.target.value)
    }

    const handleKeyDown = (e) => {
        if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
            e.preventDefault();
        }

        if (e.key === "Enter") {
            if (isFirstEnter) {
                AnswerQuestion(answer);
                setIsFirstEnter(false); // Đánh dấu đã bấm lần đầu
            } else {
                props.setIsQuesttionModalOpen(false),
                    returnPosition(answer),
                    setFeedback(""),
                    setAnswer()
            }
        }
    };

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
                fontSize: 17,
                margin: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: (props.index === 13 || props.index === 41)
                    ? `translate(30px, 0px)`
                    : props.index === 21 ? `translate(-30px, 0px)`
                        : `translate(0px, ${y}px)`
            }}>
            {props.shotCutStartPosition.includes(props.index) ?
                <img src="./triangle.png" alt="" width={23} />
                :
                sign ? num1 + " x " + num2 : num3 + " : " + num1
            }
            {/* {sign ? num1 + " x " + num2 : num3 + " / " + num1} */}

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
                        // height: "fit-content", // Chiều cao vừa với nội dung
                        margin: "auto",
                        padding: "20px",
                        background: "rgba(255, 255, 255, 0)",
                        borderRadius: "10px",
                        border: "none",
                        backgroundImage: "url('./leatherette_1.png')", // Đường dẫn ảnh nền
                        backgroundSize: "80vw auto",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
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
                        height: "100%",

                    }}>

                    {/* <h1>Bạn phải trả lời câu hỏi sau</h1> */}

                    <h1 style={{ fontSize: 100, margin: 20 }}>
                        {sign ? num1 + " x " + num2 : num3 + " : " + num1}
                    </h1>

                    <input
                        onChange={handleChange}
                        value={answer}
                        type="text"
                        autoFocus={true}
                        style={{
                            fontSize: "50px",
                            padding: "12px 15px",
                            width: "auto",
                            maxWidth: "300px",
                            minWidth: "10px",
                            // border: "2px solid rgba(200, 200, 200, 0.5)", // Màu viền nhẹ
                            // borderRadius: "8px",
                            outline: "none",
                            // transition: "border 0.3s, box-shadow 0.3s",
                            backgroundColor: "rgba(255, 255, 255, 0.2)", // Màu trong hơi đục
                            // boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)",
                            // backdropFilter: "blur(5px)", // Hiệu ứng mờ nền
                            // WebkitAppearance: "none", // Ẩn nút tăng/giảm trên Safari
                            // MozAppearance: "textfield", // Ẩn nút tăng/giảm trên Firefox
                            margin: 20,
                            textAlign: "center"
                        }}
                        onFocus={(e) => {
                            e.target.style.border = "2px solid rgba(74, 144, 226, 0.7)";
                            e.target.style.boxShadow = "0 0 8px rgba(74, 144, 226, 0.3)";
                        }}
                        onBlur={(e) => {
                            e.target.style.border = "2px solid rgba(200, 200, 200, 0.5)";
                            e.target.style.boxShadow = "none";
                        }}
                        onKeyDown={handleKeyDown}
                    />

                    {!feedback &&
                        <button
                            onClick={() => AnswerQuestion(answer)}
                            style={{
                                fontSize: 20,
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: "#8B5A2B",
                                margin: 20
                            }}
                        >
                            xác nhận
                        </button>
                    }


                    {feedback && (
                        <img
                            src={feedback}
                            alt="Feedback"
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "300px", // Có thể chỉnh kích thước theo ý muốn
                                height: "auto",
                                zIndex: 2000
                            }}
                        />
                    )}


                    {feedback &&
                        <button
                            onClick={() => (
                                props.setIsQuesttionModalOpen(false),
                                returnPosition(answer),
                                setFeedback(""),
                                setAnswer()
                            )}
                            style={{
                                fontSize: 20,
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: "#8B5A2B"
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