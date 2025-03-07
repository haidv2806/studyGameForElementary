import React, { useState, useEffect } from "react";
import MultiQBox from "../QuestionBox/MultiQBox";
import Dice from "../Dice/dice";
import ExplanMark from "../Explan/ExplanMark";
import MultiHeart from "../Heart/MultiHreart";
import SVGWave from "../Wave/SVGWave";
import MovingPrivate from "../Animation/MovingPrivate";


function MainGame() {

    const QuestionPosition = [42, 43, 44, 45, 46, 47, 48, 41, 34, 33, 32, 31, 30, 29, 28, 21, 14, 15, 16, 17, 18, 19, 20, 13, 6, 5, 4, 3, 2, 1]
    const [currentLocation, setCurrentLocation] = useState(QuestionPosition[0])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isQuesttionModalOpen, setIsQuesttionModalOpen] = useState(false)
    const [numHeart, setNumHeart] = useState([1, 1, 1])
    const [listQusettionOffsetPosision, setListQusettionOffsetPosision] = useState(
        QuestionPosition.map(() => ({ x: 0, y: 0 }))
    );
    console.log(currentIndex);

    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100vh" }}>
                <div>
                    <MultiHeart numHeart={numHeart} />
                    <Dice
                        currentLocation={currentLocation}
                        setCurrentLocation={setCurrentLocation}
                        QuestionPosition={QuestionPosition}
                        setCurrentIndex={setCurrentIndex}
                        currentIndex={currentIndex}
                        setIsQuesttionModalOpen={setIsQuesttionModalOpen}
                    />
                </div>

                <MultiQBox
                    currentLocation={currentLocation}
                    setIsQuesttionModalOpen={setIsQuesttionModalOpen}
                    isQuesttionModalOpen={isQuesttionModalOpen}
                    setNumHeart={setNumHeart}
                    setCurrentIndex={setCurrentIndex}
                    setListQusettionOffsetPosision={setListQusettionOffsetPosision}
                    QuestionPosition={QuestionPosition}
                />

                <div>
                    <ExplanMark isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                </div>
            </div>

            {/* Đảm bảo MovingPrivate nằm trên tất cả */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                <MovingPrivate
                    listQusettionOffsetPosision={listQusettionOffsetPosision}
                    currentIndex={currentIndex}
                />
            </div>
        </div>
    );
}

export default MainGame