import React from "react";

function SGVPath({ positions }) {
    if (positions.length < 2) return null;

    const adjustedPositions = positions.slice(1).map(pos => ({
        x: pos.x + 30,
        y: pos.y + 30
    }));

    // Tạo đường cong từ danh sách điểm
    const pathData = adjustedPositions.reduce((acc, pos, index, arr) => {
        if (index === 0) {
            return `M ${pos.x} ${pos.y}`; // Bắt đầu từ điểm đầu tiên
        }
        const prev = arr[index - 1];
        const cx = (prev.x + pos.x) / 2; // Tạo điểm điều khiển trung gian
        const cy = (prev.y + pos.y) / 2;
        return `${acc} Q ${cx} ${cy}, ${pos.x} ${pos.y}`;
    }, "");

    return (
        // <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: -1 }}>
        //     <path
        //         d={pathData}
        //         fill="none"
        //         stroke="white"
        //         strokeWidth="5"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //         strokeDasharray="5,10,3,8"
        //         strokeDashoffset="2"
        //     />
        // </svg>

<svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 0 }}>
    <defs>
        {/* Gradient xanh biển pha trắng */}
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#87CEFA" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0.6" />
        </linearGradient>

        {/* Hiệu ứng mờ */}
        <filter id="blurFilter">
            <feGaussianBlur stdDeviation="3" />
        </filter>
    </defs>

    {/* Dòng hải lưu uốn lượn */}
    <path
        d={pathData}
        fill="none"
        stroke="url(#waveGradient)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="20,40"
        strokeDashoffset="0"
        // filter="url(#blurFilter)"
    >
        <animate 
            attributeName="stroke-dashoffset"
            from="0"
            to="-100"
            dur="1s"
            repeatCount="indefinite"
        />
    </path>
</svg>
    );
}

export default SGVPath;