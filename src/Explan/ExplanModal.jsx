import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const MyModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Mở Modal</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000 },
                    content: { width: "300px", margin: "auto", padding: "20px" }
                }}
            >
                <h2>Modal Title</h2>
                <p>Nội dung modal</p>
                <button onClick={() => setIsOpen(false)}>Đóng</button>
            </Modal>
        </div>
    );
};

export default MyModal;