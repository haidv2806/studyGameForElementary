import React, { useState } from "react";
import Modal from "react-modal";
import VideoModal from "./VideoModal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    background: "none",
    padding: 0,
    overflow: "hidden",
  },
};

const buttonStyles = {
  position: "absolute",
  top: "1.25rem",
  right: "1.25rem",
  padding: "0.75rem 1.5rem",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#FFFFFF",
  backgroundColor: "#8B5A2B",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer",
  zIndex: 10,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s ease",
};

const buttonHoverStyles = {
  ...buttonStyles,
  transform: "scale(1.05)",
};

function OpeningModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [videoModelOpen, setVideoModelOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
    setVideoModelOpen(true);
  };

  // SỬA: Truyền hàm, KHÔNG gọi hàm
  const handleVideoClose = () => setVideoModelOpen(false);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Opening Image Modal"
        onRequestClose={closeModal} // Có thể đóng bằng ESC
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <img
            src="openingTheme.png"
            alt="Opening visual"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <button
            style={isButtonHovered ? buttonHoverStyles : buttonStyles}
            onClick={closeModal}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            BẮT ĐẦU PHIÊU LƯU
          </button>
        </div>
      </Modal>

      {/* SỬA: Truyền hàm đóng, không gọi hàm */}
      <VideoModal
        fileId="14UlJ4NqxNt5FXv6KorZYCVsS9Ge2Iku3"
        isOpen={videoModelOpen}
        onRequestClose={handleVideoClose}
        buttonText={"TIẾP TỤC"}
      />
    </div>
  );
}

export default OpeningModal;