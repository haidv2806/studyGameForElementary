import React, { useState, useEffect } from "react";

function SGVPathArrow({
    listQusettionOffsetPosision,
    setSelectedShotCutIndex,
    selectedShotCutIndex,
    stRow,
    ndRow,
    setShotCutStartPosition,
    setShotCutEndPosition,
    boardPositions,
    arr
}) {
    const [randomFirstRow, setRandomFirstRow] = useState(null)
    const [randomSecondRow, setRandomSecondRow] = useState(null)
    const [isUpdown, setItUpdown] = useState(false)
    // boardPositions= boardPositions.slice(1)

    if (listQusettionOffsetPosision.length < 2) return null; // Đảm bảo có ít nhất 2 điểm

    const IndexInRows = [
        [1, 2, 3, 4, 5, 6],
        [8, 9, 10, 11, 12, 13, 14],
        [16, 17, 18, 19, 20, 21, 22],
        [24, 25, 26, 27, 28]
    ]

    function randomForShotCutIndex(row) {
        const randomNumber = IndexInRows[row][Math.floor(Math.random() * IndexInRows[row].length)];

        if (arr.includes(randomNumber)) {
            return randomForShotCutIndex(row);
        } else {
            // setSelectedShotCutIndex(prev => [...prev, randomNumber]);
            arr.push(randomNumber)
            return randomNumber;
        }
    }


    useEffect(() => {
        if (randomFirstRow !== null && randomSecondRow !== null) return; // Đảm bảo chỉ chạy 1 lần

        const random = Math.random() < 0.5; // 50% xác suất true hoặc false
        let randomStartPosition, randomEndPosition;

        if (random) {
            setItUpdown(true);
            randomStartPosition = randomForShotCutIndex(ndRow);
            randomEndPosition = randomForShotCutIndex(stRow);
        } else {
            setItUpdown(false);
            randomStartPosition = randomForShotCutIndex(stRow);
            randomEndPosition = randomForShotCutIndex(ndRow);
        }

        setShotCutStartPosition(prev => [...prev, boardPositions[randomStartPosition]]);
        setShotCutEndPosition(prev => [...prev, boardPositions[randomEndPosition]]);
        setRandomFirstRow(randomStartPosition);
        setRandomSecondRow(randomEndPosition);
    }, []); // Dependency array rỗng để đảm bảo chỉ chạy 1 lần

    if (randomFirstRow === null || randomSecondRow === null) return null; // Đợi giá trị được khởi tạo

    const { x: x1, y: y1 } = listQusettionOffsetPosision[randomFirstRow];
    const { x: x2, y: y2 } = listQusettionOffsetPosision[randomSecondRow];

    const color = "White";
    const strokeWidth = 2;

    // Tính điểm uốn cong tại 30% và 60%
    const midX1 = x1 + (x2 - x1) * 0.3;
    const midY1 = y1 + (y2 - y1) * 0.3 - 50;

    const midX2 = x1 + (x2 - x1) * 0.6;
    const midY2 = y1 + (y2 - y1) * 0.6 + 50;

    return (
        <svg width="100%" height="100%" style={{ position: "absolute", pointerEvents: "none" }}>
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="10"
                    refY="3.5"
                    orient="auto"
                >
                    <polygon points="0 0, 10 3.5, 0 7" fill={color} />
                </marker>
            </defs>

            <path
                d={isUpdown ?
                    `M ${x1 + 30},${y1 + 50} 
                    C ${midX1},${midY1} 
                      ${midX2},${midY2} 
                      ${x2 + 30},${y2 + 10}`
                    :
                    `M ${x1 + 35},${y1 + 10} 
                      C ${midX1},${midY1} 
                        ${midX2},${midY2} 
                        ${x2 + 30},${y2 + 54}`
                }
                stroke={color}
                strokeWidth={strokeWidth}
                fill="transparent"
                markerEnd="url(#arrowhead)"
                strokeDasharray="5,10,3,8"
            />
        </svg>
    );
}

export default SGVPathArrow;