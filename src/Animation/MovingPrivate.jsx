import React from "react";
import { motion } from "framer-motion";

function MovingPrivate({ listQusettionOffsetPosision, currentIndex }) {
    if (listQusettionOffsetPosision.length === 0) {
        return null; // Không hiển thị nếu chưa có dữ liệu
    }

    return (
        <motion.img
            src="/private.png"
            alt="Moving Object"
            style={{ width: "70px", height: "70px", position: "absolute" }}
            animate={{
                x: listQusettionOffsetPosision[currentIndex]?.x || 0, 
                y: listQusettionOffsetPosision[currentIndex]?.y || window.innerHeight
            }}
            transition={{ duration: 1, ease: "linear" }} // Chuyển động trong 1s
        />
    );
}

export default MovingPrivate;