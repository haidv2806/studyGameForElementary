import React, { useState, useEffect } from "react";
import QBox from "./QBox";

function MultiQBox(props) {
    const boardRows = 7;
    const boardColumns = 7;
    const boardCells = Array.from({ length: boardRows * boardColumns });

    const [questionCellIndexes, setQuestionCellIndexes] = useState([]);

    useEffect(() => {
        let indexes = [];

        // Hàng 1, 3, 5, 7 (index từ 0-6, 14-20, 28-34, 42-48)
        for (let r of [0, 2, 4, 6]) {
            for (let c = 0; c < boardColumns; c++) {
                indexes.push(r * boardColumns + c);
            }
        }

        // Phần tử cuối của hàng 2 (index 13)
        indexes.push(13);

        // Phần tử đầu của hàng 4 (index 21)
        indexes.push(21);

        // Phần tử cuối của hàng 6 (index 41)
        indexes.push(41);

        const indexToRemove = [0, 42];
        indexToRemove.sort((a, b) => b - a);

        indexToRemove.forEach(idx => {
            const indexInArray = indexes.indexOf(idx);
            if (indexInArray !== -1) {
                indexes.splice(indexInArray, 1);
            }
        });

        setQuestionCellIndexes(indexes);
    }, []);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${boardColumns}, 100px)`,
                gridTemplateRows: `repeat(${boardRows}, 100px)`,
            }}
        >
            {boardCells.map((_, index) => (
                <div key={index}
                    style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // background: questionCellIndexes.includes(index) ? "lightblue" : "white",
                        // border: "1px solid black",
                    }}
                >
                    {questionCellIndexes.includes(index) &&
                        <QBox
                            index={index}
                            currentLocation={props.currentLocation}
                            setIsQuesttionModalOpen={props.setIsQuesttionModalOpen}
                            isQuesttionModalOpen={props.isQuesttionModalOpen}
                            setNumHeart={props.setNumHeart}
                            setListQusettionOffsetPosision={props.setListQusettionOffsetPosision}
                            QuestionPosition={props.QuestionPosition}
                            setLossIsAlertOpen={props.setLossIsAlertOpen}
                            setWinIsAlertOpen={props.setWinIsAlertOpen}
                            currentRollNum={props.currentRollNum}
                            setCurrentLocation={props.setCurrentLocation}
                            setCurrentIndex={props.setCurrentIndex}
                            setIsPlaying={props.setIsPlaying}
                            stepNum={props.stepNum}
                            shotCutStartPosition={props.shotCutStartPosition}
                        />}
                    
                    {index == 0 && <img src="/treasure.png" alt="" width={150} />}
                    {index == 12 && <img src="/karaken.png" alt="" width={130} />}
                    {index == 22 && <img src="/island.png" alt="" width={150} />}
                    {index == 42 && <img src="/private.png" alt="" width={150} />}
                </div>
            ))}
        </div>
    );
}

export default MultiQBox;