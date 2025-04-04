import { useState } from 'react'
import Home from './assets/comp/home.jsx'
import About from './assets/comp/about.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>


    </Router>
  )
}

export default App
