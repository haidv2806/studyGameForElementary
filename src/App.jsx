import React, { useEffect, useRef } from 'react';
import MainGame from './MainGame/MainGame.jsx';
let bgMusic; // Giữ nhạc chạy liên tục

function App() {
  useEffect(() => {
    // Background màu xanh
    document.body.style.background = "rgba(0, 119, 255, 0.8)";

    // Khóa scroll X và Y
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.background = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!bgMusic) {
      bgMusic = new Audio("/theme_2.wav");
      bgMusic.loop = true;
      bgMusic.volume = 0.03;
    }

    const playMusic = () => {
      bgMusic.play().catch(err => console.log("Không thể phát nhạc:", err));
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);
    return () => document.removeEventListener("click", playMusic);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: 0,
        }}
      />
      <MainGame />
    </div>
  );
}

export default App;
