import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About.js';
import Opportunities from './pages/Opportunities.js';
import Outreach from './pages/Outreach.js';
import Publications from './pages/Publications.js';
import Research from './pages/Research.js';
import Team from './pages/Team.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
