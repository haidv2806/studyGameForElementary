import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SGVPathArrow from './Wave/SGVPathArrow.jsx'

import Dice from './Dice/dice.jsx'
import QBox from './QuestionBox/QBox.jsx'
import MultiQBox from './QuestionBox/MultiQBox.jsx'
import MainGame from './MainGame/MainGame.jsx'

function App() {
  return (
    // <Dice />
    // <QBox />
    // <MultiQBox/>
    <MainGame/>
    // <SGVPathArrow x1={50} y1={300} x2={400} y2={100} color="red" strokeWidth={4} />
  )
}

export default App
