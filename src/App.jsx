import React, { useEffect, useRef } from 'react';
import MainGame from './MainGame/MainGame.jsx';
import StarterModal from './Explan/StarterModal.jsx';

let bgMusic; // Giữ nhạc chạy liên tục

function App() {
  useEffect(() => {
    // Background màu xanh
    document.body.style.background = "rgba(0, 119, 255, 0.8)";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  // useEffect(() => {
  //   const ExplanAudio = new Audio("/audio/welcome.mp3");

  //   const playIntro = () => {
  //     ExplanAudio.play().catch(err => console.log("Không thể phát âm thanh:", err));
  //     document.removeEventListener("click", playIntro);
  //   };

  //   document.addEventListener("click", playIntro);
  //   return () => document.removeEventListener("click", playIntro);
  // }, []);

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
    <div style={{ position: "relative", height: "100vh" }}>
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
          zIndex: 0,
        }}
      />
      <MainGame />
    </div>
  );
}

export default App;