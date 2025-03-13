import React, { useEffect } from 'react';
import MainGame from './MainGame/MainGame.jsx';
import StarterModal from './Explan/StarterModal.jsx';

function App() {
  useEffect(() => {
    // Background màu xanh
    document.body.style.background = "rgba(0, 119, 255, 0.8)";
    return () => {
      document.body.style.background = "";
    };
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