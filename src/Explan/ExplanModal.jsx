import VideoModal from "./VideoModal"

function ExplanModal({ isModalOpen, setIsModalOpen }) {
    return (
        <div>
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
                onClick={() => setIsModalOpen(true)}
            >
                LUẬT CHƠI
            </button>

            <VideoModal
                fileId="1k2fV4M3lPjmJ83hH0_TdaudRf_UwYLjZ"
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                buttonText={"VÀO CHƠI"}
            />
        </div>
    )
}

export default ExplanModal