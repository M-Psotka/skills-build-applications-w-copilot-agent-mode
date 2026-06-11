import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="container">
      <h1>OctoFit Tracker</h1>
      <p>Welcome to the OctoFit Tracker application</p>
    </div>
  )
}

export default App
