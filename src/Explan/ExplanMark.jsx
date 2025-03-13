import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");


function ExplanMark(props) {
    const { isModalOpen: isOpen, setIsModalOpen: setIsOpen } = props;

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                <img src="exclamation.png" alt="" width={100} />
            </button>

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
                        // height: "fit-content", // Chiều cao vừa với nội dung
                        margin: "auto", 
                        padding: "20px", 
                        background: "rgba(255, 255, 255, 0)", 
                        borderRadius: "10px",
                        border: "none",
                        backgroundImage: "url('/leatherette_1.png')", // Đường dẫn ảnh nền
                        // backgroundSize: "cover", // Ảnh phủ toàn bộ modal
                        // backgroundPosition: "center", // Căn giữa ảnh nền
                        backgroundSize: "80vw auto",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center calc(50% + 40px)",
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
                        height: "100%"
                    }}>
                    <h1>Trò chơi hướng đến kho báu</h1>
                    <h2>Cách chơi</h2>
                    <ul style={{ padding: 20 }}>
                        <li><p>Chơi theo nhóm</p></li>
                        <li><p>Người chơi bắt đầu từ vị trí <b>xuất phát</b> khi đến lượt, người chơi gieo xúc xắc. Đếm số chấm ở mặt trên xúc xắc rồi di chuyển số ô bằng số chấm nhận được. Nếu đến hình <b>tam giác</b> thì đi tiếp tới ô theo đường mũi tên.</p></li>
                        <li><p>Nêu kết quả của phép tính tại ô đi đến, nếu sai kết quả thì phải quay về ô xuất phát trước đó.</p></li>
                        <li><p>Trò chơi kết thúc khi người chơi đến được <b>Kho báu</b></p></li>
                    </ul>
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            fontSize: 20,
                            padding: 10,
                            borderRadius: 10,
                            backgroundColor: "green"
                        }}
                    >
                        Đóng
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default ExplanMark