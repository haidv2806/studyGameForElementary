import React from "react";

function SGVPathArrow({  }) {
    const point1 = {x: 30, y: 30};
    const point2 = {x: 100, y: 200};

    let pathData = "M100 100 L200 300";

    return (
        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: -1 }}>
            <path
                d={pathData}
                fill="none"
                stroke="white"
                strokeWidth={6}
            />
        </svg>
    );
}

export default SGVPathArrow;