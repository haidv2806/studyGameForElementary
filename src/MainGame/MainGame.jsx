import React, { useState, useEffect } from "react";
import MultiQBox from "../QuestionBox/MultiQBox";
import Dice from "../Dice/dice";
import ExplanMark from "../Explan/ExplanMark";
import MultiHeart from "../Heart/MultiHreart";
import SGVPath from "../Wave/SGVPath";
import SGVPathArrow from "../Wave/SGVPathArrow";
import MovingPrivate from "../Animation/MovingPrivate";
import WaveAnimationSVG from "../Animation/WaveAnimationSVG";
import LossAlert from "../Alert/LossAlert";
import WinAlert from "../Alert/WinAlert";
import StarterModal from "../Explan/StarterModal";

function MainGame() {
    const boardPositions = [42, 43, 44, 45, 46, 47, 48, 41, 34, 33, 32, 31, 30, 29, 28, 21, 14, 15, 16, 17, 18, 19, 20, 13, 6, 5, 4, 3, 2, 1]
    const [currentPlayerPosition, setCurrentPlayerPosition] = useState(boardPositions[0])
    const [currentIndex, setCurrentIndex] = useState(28) // 28
    const [diceValue, setDiceValue] = useState(0)
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false)
    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)
    const [remainingLives, setRemainingLives] = useState([1, 1, 1])
    const [isLossAlertOpen, setLossIsAlertOpen] = useState(false)
    const [isWinAlertOpen, setWinIsAlertOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [questionPositionOffsets, setQuestionPositionOffsets] = useState(
        boardPositions.map(() => ({ x: 0, y: 0 }))
    );
    const [selectedShortcutIndices, setSelectedShortcutIndices] = useState([])
    const [shotCutStartPosition, setShotCutStartPosition] = useState([])
    const [shotCutEndPosition, setShotCutEndPosition] = useState([])
    const [stepNum, setStepNum] = useState([])
    const [awaitTime, setAwaitTime] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAwaitTime(true)
        }, 500);
    }, [])

    // Debug logs wrapped in useEffect to prevent unnecessary re-renders
    // useEffect(() => {
    //     if (process.env.NODE_ENV === 'development') {
    //         console.log("================================================");
    //         console.log("shotCutStartPosition: ", shotCutStartPosition);
    //         console.log("shotCutEndPosition: ", shotCutEndPosition);
    //         console.log("questionPositionOffsets: ", questionPositionOffsets);
    //         console.log("currentPlayerPosition: ", currentPlayerPosition);
    //     }
    // }, [shotCutStartPosition, shotCutEndPosition, questionPositionOffsets, currentPlayerPosition]);

    let arr = []
    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <SGVPath positions={questionPositionOffsets} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100vh", zIndex: 2 }}>
                <div style={{ alignSelf: "flex-start" }}>
                    <MultiHeart numHeart={remainingLives} />
                    <Dice
                        currentLocation={currentPlayerPosition}
                        setCurrentLocation={setCurrentPlayerPosition}
                        QuestionPosition={boardPositions}
                        setCurrentIndex={setCurrentIndex}
                        currentIndex={currentIndex}
                        setStepNum={setStepNum}
                        setIsQuesttionModalOpen={setIsQuestionModalOpen}
                        setCurrentRollNum={setDiceValue}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        shotCutStartPosition={shotCutStartPosition}
                        shotCutEndPosition={shotCutEndPosition}
                    />
                </div>

                {awaitTime ?
                    <MultiQBox
                        currentLocation={currentPlayerPosition}
                        setIsQuesttionModalOpen={setIsQuestionModalOpen}
                        isQuesttionModalOpen={isQuestionModalOpen}
                        setNumHeart={setRemainingLives}
                        setCurrentIndex={setCurrentIndex}
                        setListQusettionOffsetPosision={setQuestionPositionOffsets}
                        QuestionPosition={boardPositions}
                        setLossIsAlertOpen={setLossIsAlertOpen}
                        setWinIsAlertOpen={setWinIsAlertOpen}
                        currentRollNum={diceValue}
                        setCurrentLocation={setCurrentPlayerPosition}
                        setIsPlaying={setIsPlaying}
                        shotCutStartPosition={shotCutStartPosition}
                        stepNum={stepNum}
                        isQuestionModalOpen={isQuestionModalOpen}
                    />
                    : null
                }


                <div style={{ alignSelf: "flex-start" }}>
                    <ExplanMark isModalOpen={isHelpModalOpen} setIsModalOpen={setIsHelpModalOpen} />
                    <StarterModal setIsHelpModalOpen={setIsHelpModalOpen} />
                </div>
            </div>



            {/* <WaveAnimationSVG listQusettionOffsetPosision={listQusettionOffsetPosision}/> */}
            {/* Đảm bảo MovingPrivate nằm trên tất cả */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                <MovingPrivate
                    listQusettionOffsetPosision={questionPositionOffsets}
                    currentIndex={currentIndex}
                    currentPlayerPosition={currentPlayerPosition}
                    boardPositions={boardPositions}
                />
                <LossAlert isOpen={isLossAlertOpen} onClose={() => setLossIsAlertOpen(false)} />
                <WinAlert isOpen={isWinAlertOpen} onClose={() => setWinIsAlertOpen(false)} />
                {[...Array(3)].map((_, i) => (
                    <SGVPathArrow
                        key={i}
                        listQusettionOffsetPosision={questionPositionOffsets}
                        setSelectedShotCutIndex={setSelectedShortcutIndices}
                        selectedShotCutIndex={selectedShortcutIndices}
                        stRow={i}
                        ndRow={i + 1}
                        arr={arr}
                        setShotCutStartPosition={setShotCutStartPosition}
                        setShotCutEndPosition={setShotCutEndPosition}
                        boardPositions={boardPositions}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainGame