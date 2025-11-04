import React, { useState, useEffect, useRef } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ExplanMark(props) {
    const { isModalOpen: isOpen, setIsModalOpen: setIsOpen } = props;

    const audioRef = useRef(null);

    useEffect(() => {
        // Khởi tạo audio chỉ 1 lần
        audioRef.current = new Audio("/audio/explant.mp3");
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isOpen) {
            audioRef.current.currentTime = 0; // luôn phát từ đầu
            audioRef.current.play().catch(err => {
                console.log("Không thể phát âm thanh:", err);
            });
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // reset về 0 nếu muốn tắt hẳn
        }
    }, [isOpen]);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                <img src="exclamation.png" alt="" style={{ width: "3.125rem" }} />
            </button>

            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        backdropFilter: "blur(10px)",
                        zIndex: 1000,
                    },
                    content: {
                        // position: 'relative',
                        width: "60%",
                        margin: "auto",
                        marginRight: "35%", // 600px
                        padding: "1.25rem", // 20px
                        background: "rgba(255, 255, 255, 0)",
                        borderRadius: "0.625rem", // 10px
                        border: "none",
                        backgroundImage: "url('/leatherette_1.png')",
                        backgroundSize: "80vw auto",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center calc(50% + 2.5rem)", // 40px
                        overflow: "visible"
                    },
                }}
            >
                <div
                    style={{
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "clamp(0.875rem, 1.2vw, 1.5rem)",
                        height: "100%",
                    }}
                >
                    <h1>TRUY TÌM KHO BÁU</h1>
                    <h2>Cách chơi</h2>
                    <ul style={{ padding: "1.25rem" /* 20px */ }}>
                        <li>
                            <p>
                                Bắt đầu từ vị trí <b>xuất phát</b>, bạn gieo xúc xắc.
                                Đếm số chấm ở mặt trên xúc xắc rồi di chuyển số ô bằng số chấm nhận được.
                                Nếu đến hình <b>tam giác</b> thì đi tiếp tới ô theo đường mũi tên.
                            </p>
                        </li>
                        <li>
                            <p>
                                Nêu kết quả của phép tính tại ô bạn đi đến, nếu sai kết quả thì phải quay về ô xuất phát trước đó.
                            </p>
                        </li>
                        <li>
                            <p>
                                Trò chơi kết thúc khi bạn đến được <b>KHO BÁU</b>.
                            </p>
                        </li>
                    </ul>
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            fontSize: "clamp(1rem, 1.5vw, 2.5rem)",
                            padding: "0.625rem", // 10px
                            borderRadius: "0.625rem", // 10px
                            backgroundColor: "#8B5A2B",
                        }}
                    >
                        Đóng
                    </button>

                    <img
                        src={"/robot/speck.gif"}
                        alt="Cảm ơn đã chơi"
                        style={{
                            position: "absolute",
                            width: "80rem",     // 1000px
                            marginLeft: "85rem", // 1450px
                            zIndex: 1
                        }}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default ExplanMark;