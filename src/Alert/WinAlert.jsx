import Modal from "react-modal";

function WinAlert({ isOpen, onClose }) {

    const random = Math.floor(Math.random() * 3) + 1;
    let imageSrc = "";

    switch (random) {
        case 1:
            imageSrc = "Pie.png";
            break;
        case 2:
            imageSrc = "ChupaChups.png";
            break;
        default:
            imageSrc = "Snack.png";
            break;
    }


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
                    width: "65%",
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
                src={"/" + imageSrc} // Đổi thành link ảnh bạn muốn
                alt="Chiến thắng"
                style={{ width: "400px", marginBottom: "10px" }}
            />
            <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>
                🎉 Tuyệt vời! Chúc mừng bạn đã tìm ra kho báu 🎉
            </h2>
            <button
                onClick={() => window.location.reload()}
                style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    fontSize: "1.2rem",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Nhận quà
            </button>
        </Modal>
    );
}

export default WinAlert;