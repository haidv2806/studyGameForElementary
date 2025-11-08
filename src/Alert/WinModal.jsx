// WinModal.jsx
import React, { useState } from "react";
import VideoModal from "../Explan/VideoModal";

export default function WinModal({ isOpen, onClose }) {

    // Đóng toàn bộ
    const handleFinalClose = () => {
        window.location.reload();
    };
    
    return (
        <>
            {/* VIDEO 1 + NÚT TIẾP TỤC */}
            <VideoModal
                fileId="17Zc4283q535c_zAazqnYx2Rc1-hrHp95"
                isOpen={isOpen}
                onRequestClose={handleFinalClose}
                isShowBtn={true}
            />
        </>
    );
}