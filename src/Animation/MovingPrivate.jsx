import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MovingPrivate({ listQusettionOffsetPosision }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (listQusettionOffsetPosision.length > 0 && index < listQusettionOffsetPosision.length - 1) {
            const timer = setTimeout(() => {
                setIndex(prev => prev + 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [index, listQusettionOffsetPosision]); // Thêm dependency để cập nhật khi danh sách thay đổi

    if (listQusettionOffsetPosision.length === 0) {
        return null; // Không hiển thị nếu chưa có dữ liệu
    }

    return (
        <div >
            <motion.img
                src="/private.png"
                alt="Moving Object"
                style={{ width: "50px", height: "50px", position: "absolute" }}
                animate={{
                    x: listQusettionOffsetPosision[index]?.x || 0, 
                    y: listQusettionOffsetPosision[index]?.y || 0
                }}
                transition={{ duration: 0.5, ease: "linear" }}
            />
        </div>
    );
}

export default MovingPrivate;