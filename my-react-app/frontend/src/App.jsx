import { BrowserRouter, Routes, Route, useNavigate } from 'react-router'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
//import Nav from './components/Nav'
import Prologue from './components/Pages/Prologue.jsx'

function Home() {
  const navigate = useNavigate()
  const handleStartGame = () => {
    navigate('/Prologue')
  }
  
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>Murder Mystery Game</h1>
      </div>
      <button
        type="button"
        className="counter"
        onClick={handleStartGame}
      >
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        Start Game
      </button>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prologue" element={<Prologue />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App