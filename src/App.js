import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Alignments from "./components/Alignments"
import Races from "./components/Races"

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alignments">Alignments</Link>
          </li>
          <li>
            <Link to="/races">Races</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alignments" element={<Alignments />} />
        <Route path="/races" element={<Races />} />
      </Routes>
    </div>
  )
}

const Home = () => (
  <div>
    <h1>Welcome to D&D Data</h1>
    <p>Select a category to explore.</p>
  </div>
)

export default App
