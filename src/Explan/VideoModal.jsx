import React, {useEffect, useState} from "react";
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

function VideoModal({ fileId, isOpen, onRequestClose, isShowBtn = false }) {
  const [showButton, setShowButton] = useState(false); // hiện nút sau 10s

  // HIỆN NÚT SAU 10 GIÂY
  useEffect(() => {
    if (isOpen && isShowBtn) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 1000 * 12); // 12 giây

      return () => clearTimeout(timer); // dọn dẹp
    }
  }, [isOpen, isShowBtn]);

  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customModalStyles}
      contentLabel="Video Player Modal"
      ariaHideApp={true}
    >
      {/* Nút đóng - SỬA: dùng thuộc tính camelCase trực tiếp */}
      <button
        onClick={onRequestClose}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          zIndex: 1002,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(4px)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")}
        aria-label="Đóng"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}        // SỬA: camelCase
          strokeLinecap="round"     // SỬA
          strokeLinejoin="round"    // SỬA
          style={{ width: "28px", height: "28px", color: "white" }}
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* NÚT "TIẾP TỤC" – GIỮA MÀN HÌNH, SAU 10S */}
      {isOpen && isShowBtn && showButton && (
        <button
          onClick={onRequestClose}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1002,
            padding: "20px 50px",
            background: "#8B5A2B",
            color: "white",
            fontSize: "2.2rem",
            fontWeight: "bold",
            borderRadius: "20px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            animation: "pulse 2s infinite",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translate(-50%, -50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translate(-50%, -50%) scale(1)";
          }}
        >
          TIẾP TỤC
        </button>
      )}

      <iframe
        src={embedUrl}
        frameborder="0"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        width="100%"
        height="100%">
      </iframe>
    </Modal>
  );
}

export default VideoModal;