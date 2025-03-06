import React, { useState, useEffect } from "react";
import MultiQBox from "../QuestionBox/MultiQBox";
import Dice from "../Dice/dice";
import ExplanMark from "../Explan/ExplanMark";
import ExplanModal from "../Explan/ExplanModal";

function MainGame() {
    const [currentLocation, setCurrentLocation] = useState(0)
    const alls = [43, 44, 45, 46, 47, 48, 41, 34, 33, 32, 31, 30, 29, 28, 21, 14, 15, 16, 17, 18, 19, 20, 13, 6, 5, 4, 3, 2, 1]

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        for (let i = 0; i < alls.length; i++) {
            setTimeout(((index) => {
                return () => {
                    setCurrentLocation(alls[index]);
                };
            })(i), 1000 * (i + 1)); // Mỗi lần +1 giây
        }
    }, [])


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100vh" }}>
                <div>
                    <Dice
                        currentLocation={currentLocation}
                        setCurrentLocation={setCurrentLocation}
                    />
                </div>

                <MultiQBox
                    currentLocation={currentLocation}
                />

                <div>
                    <ExplanMark
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainGame