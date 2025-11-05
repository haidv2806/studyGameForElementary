// WinModal.jsx
import React, { useState } from "react";
import VideoModal from "../Explan/VideoModal";

export default function WinModal({ isOpen, onClose }) {
    const [showFirst, setShowFirst] = useState(true);  // true = video 1, false = video 2

    // Đóng toàn bộ
    const handleFinalClose = () => {
        if (showFirst) {
            setShowFirst(false);
        } else {
            setShowFirst(true);  // reset về ban đầu
            onClose();
        }
    };

    return (
        <>
            {/* VIDEO 1 + NÚT TIẾP TỤC */}
            <VideoModal
                fileId="1bp7wtps2T7gknQ0BgOFKA_01PWcSONs_"
                isOpen={isOpen && showFirst}
                onRequestClose={handleFinalClose}
                isShowBtn={true}
            />


            {/* VIDEO 2 – CHỈ CÓ NÚT X */}
            <VideoModal
                fileId="1G6RfqhpVFrH-GMu9v77kVPlHVmagSCtL"   // THAY ID VIDEO 2 VÀO ĐÂY
                isOpen={isOpen && !showFirst}
                onRequestClose={handleFinalClose}
            />
        </>
    );
}