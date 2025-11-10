import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function StarterModal(props) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        backdropFilter: "blur(10px)",
                        zIndex: 800,
                    },
                    content: {
                        width: "60%",
                        height: "60%",
                        margin: "auto",
                        padding: "1.25rem", // 20px
                        background: "rgba(255, 255, 255, 0)",
                        borderRadius: "0.625rem", // 10px
                        border: "none",
                        backgroundImage: "url('/leatherette_3.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                        fontSize: "clamp(1.25rem, 2vw, 2.25rem)",
                        height: "100%",
                        gap: "clamp(1rem, 2vh, 2rem)",
                    }}
                >
                    <h1>TRÒ CHƠI</h1>
                    <h1>TRUY TÌM KHO BÁU</h1>

                    <div style={{ display: "flex", gap: "3.125rem" /* 50px */ }}>
                        <button
                            style={{
                                backgroundColor: "#8B5A2B",
                                color: "white",
                                fontSize: "clamp(1rem, 1.5vw, 2.5rem)",
                                padding: "0.625rem 1.25rem", // 10px 20px
                                border: "none",
                                borderRadius: "0.3125rem", // 5px
                                cursor: "pointer",
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            VÀO CHƠI
                        </button>
                        <button
                            style={{
                                backgroundColor: "#8B5A2B",
                                color: "white",
                                fontSize: "clamp(1rem, 1.5vw, 2.5rem)",
                                padding: "0.625rem 1.25rem", // 10px 20px
                                border: "none",
                                borderRadius: "0.3125rem", // 5px
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setIsOpen(false);
                                props.setIsHelpModalOpen(true);
                            }}
                        >
                            LUẬT CHƠI
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default StarterModal;