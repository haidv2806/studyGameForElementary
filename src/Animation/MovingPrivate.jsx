import React from "react";
import { motion } from "framer-motion";

function MovingPrivate({ listQusettionOffsetPosision, currentIndex, currentPlayerPosition, boardPositions }) {
    const currentIndexPos = boardPositions.indexOf(currentPlayerPosition) || 0;

    // Nếu không có dữ liệu, đặt vị trí mặc định dưới cùng
    const targetPos = listQusettionOffsetPosision[currentIndexPos] || { 
        x: 0,
        y: window.innerHeight // 100px offset để ảnh không chạm sát mép dưới
    };

    const remToPx = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

    return (
        <motion.img
            src="/private.png"
            alt="Moving Object"
            style={{
                width: "8.75rem",
                height: "8.75rem",
                position: "absolute",
            }}
            animate={{
                x: targetPos.x - remToPx(1.25), // offset sang trái 20px
                y: targetPos.y - remToPx(2.5),  // offset lên trên 40px
            }}
            transition={{ duration: 0.7, ease: "linear" }}
        />
    );
}

export default MovingPrivate;
