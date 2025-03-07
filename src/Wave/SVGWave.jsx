import React from "react";

function SGVWave({ positions }) {
    // Chuyển danh sách vị trí thành chuỗi điểm cho `polyline`
    const points = positions.map(pos => `${pos.x},${pos.y}`).join(" ");

    return (
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
            <polyline points={points} fill="none" stroke="blue" strokeWidth="10" strokeLinecap="round" />
        </svg>
    );
}

export default SGVWave;