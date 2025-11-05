import VideoModal from "./VideoModal"

function ExplanModal({ isModalOpen, setIsModalOpen }) {
    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>
                <img src="exclamation.png" alt="" style={{ width: "3.125rem" }} />
            </button>

            <VideoModal
                fileId="1k2fV4M3lPjmJ83hH0_TdaudRf_UwYLjZ"
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default ExplanModal