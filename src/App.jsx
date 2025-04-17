import Home from './assets/comp/home.jsx'
import About from './assets/comp/about.jsx'
import Contacts from './assets/comp/contact.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <nav>
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about">About</Link>
        <Link className='nav' to="/contacts">Contacts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>


    </Router>
  )
}

export default App
