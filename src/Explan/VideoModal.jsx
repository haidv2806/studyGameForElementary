import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1000,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    background: "#000",
    padding: 0,
    overflow: "hidden",
    zIndex: 1001,
  },
};

function VideoModal({ fileId, isOpen, onRequestClose, buttonText = "TIẾP TỤC" }) {
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customModalStyles}
      contentLabel="Video Player Modal"
      ariaHideApp={true}
    >
      {/* Nút duy nhất */}
      {isOpen && (
        <button
          onClick={onRequestClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1.25rem",
            zIndex: 1003,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem 1.5rem",
            background: "#8B5A2B",
            color: "white",
            fontSize: "2.2rem",
            fontWeight: "bold",
            borderRadius: "1.25rem",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            animation: "pulse 2s infinite",
            transition: "all 0.3s ease",
          }}
        >
          {buttonText}
        </button>
      )}

      <iframe
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        width="100%"
        height="100%"
      />
    </Modal>
  );
}

export default VideoModal;
