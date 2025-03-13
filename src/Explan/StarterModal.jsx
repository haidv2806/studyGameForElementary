import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");


function starterModal(props) {
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
                        zIndex: 1000 
                    },
                    content: { 
                        width: "60%", 
                        height: "60%", // Chiều cao vừa với nội dung
                        margin: "auto", 
                        padding: "20px", 
                        background: "rgba(255, 255, 255, 0)", 
                        borderRadius: "10px",
                        border: "none",
                        backgroundImage: "url('/leatherette_3.png')", // Đường dẫn ảnh nền
                        backgroundSize: "cover", // Ảnh phủ toàn bộ modal
                        backgroundPosition: "center", // Căn giữa ảnh nền
                        // backgroundSize: "80vw auto",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "center calc(50% + 40px)",
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
                        fontSize: 30,
                        height: "100%"
                    }}>
                        <h1>Trò chơi </h1>
                    <h1>HƯỚNG ĐẾN KHO BÁU</h1>
                </div>
            </Modal>
        </div>
    );
}

export default starterModal