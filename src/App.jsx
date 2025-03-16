import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Lost from './pages/Lost';
import Found from './pages/Found';

function App() {

  return (
    <Router>
    <div className='bg-black'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/found" element={<Found />} />
      </Routes>
    </div>

    <div className="bg-gray-300 h-screen text-white w-full">
      <p>hehe</p>
    </div>
      
  </Router>
  );
}

export default App
