import React from "react";
import { motion } from "framer-motion";

function WaveAnimationSVG({ listQusettionOffsetPosision }) {
    if (listQusettionOffsetPosision.length < 2) {
        return null; // Cần ít nhất 2 điểm để vẽ đường
    }

    // Số lượng đường sóng
    const waveCount = 15;

    // Tạo nhiều đường sóng, mỗi đường tăng dần 2 đơn vị
    const waves = Array.from({ length: waveCount }, (_, waveIndex) => {
        const adjustedPositions = listQusettionOffsetPosision.slice(1).map(pos => ({
            x: pos.x + waveIndex * 3 + 10, // X tăng 2 đơn vị mỗi lần
            y: pos.y + waveIndex * 3 + 10// Y tăng 2 đơn vị mỗi lần
        }));

        // Tạo đường path từ danh sách tọa độ
        const pathData = adjustedPositions.reduce((acc, point, index, arr) => {
            const { x, y } = point;
            if (index === 0) {
                return `M ${x} ${y}`; // Điểm bắt đầu
            }
            const prev = arr[index - 1];
            const cx = (prev.x + x) / 2; // Điểm điều khiển trung gian
            const cy = (prev.y + y) / 2; // Giữ độ cong tự nhiên
            return acc + ` Q ${cx} ${cy}, ${x} ${y}`; // Bézier Quadratic Curve
        }, "");

        return (
            <motion.path
                key={waveIndex}
                d={pathData}
                stroke="white"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.3 + waveIndex * 0.05} // Độ trong suốt tăng dần
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
        );
    });

    return (
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: -1 }}>
            {waves}
        </svg>
    );
}

export default WaveAnimationSVG;