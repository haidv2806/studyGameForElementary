import React, { useState, useEffect } from "react";
import QBox from "./QBox";

function MultiQBox() {
    const rows = 7;
    const cols = 7;
    const cells = Array.from({ length: rows * cols });

    const [questIndexes, setQuestIndexes] = useState([]);

    useEffect(() => {
        let indexes = [];

        // Hàng 1, 3, 5, 7 (index từ 0-6, 14-20, 28-34, 42-48)
        for (let r of [0, 2, 4, 6]) {
            for (let c = 0; c < cols; c++) {
                indexes.push(r * cols + c);
            }
        }

        // Phần tử cuối của hàng 2 (index 13)
        indexes.push(13);

        // Phần tử đầu của hàng 4 (index 21)
        indexes.push(21);

        // Phần tử cuối của hàng 6 (index 41)
        indexes.push(41);

        setQuestIndexes(indexes);
    }, []);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 100px)`,
                gridTemplateRows: `repeat(${rows}, 100px)`,
            }}
        >
            {cells.map((_, index) => (
                <div key={index} 
                    style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // background: questIndexes.includes(index) ? "lightblue" : "white",
                        // border: "1px solid black",
                    }}
                >
                    {questIndexes.includes(index) && <QBox index = {index} />}
                </div>
            ))}
        </div>
    );
}

export default MultiQBox;