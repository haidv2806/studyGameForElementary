import Modal from "react-modal";

function LossAlert({ isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: { 
                    backgroundColor: "rgba(0, 0, 0, 0.5)", 
                    backdropFilter: "blur(10px)", 
                    zIndex: 2000 
                },
                content: { 
                    width: "300px", 
                    height: "fit-content", 
                    margin: "auto", 
                    padding: "20px", 
                    background: "rgba(255, 255, 255, 0.8)", 
                    borderRadius: "10px",
                    textAlign: "center",
                    border: "none"
                }
            }}
        >
            <img 
                src="/GameOver.png" // Đổi thành link ảnh bạn muốn
                alt="Game Over"
                style={{ width: "200px", marginBottom: "10px" }}
            />
            <h2>Bạn đã hết lượt!</h2>
            <button 
                onClick={() => window.location.reload()} 
                style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Đồng ý
            </button>
        </Modal>
    );
}

export default LossAlert;