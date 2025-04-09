import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'
import Login from './Login.jsx';
import Home from './Home.jsx';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
