import React from 'react'
import Form from './Form'
import Counter from './Counter'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button type="button" onClick={() => navigate("/counter")}>counter</button>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>
      </div>

    </Router>
  )
}

export default App
