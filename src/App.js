import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Menu } from './components/menu';
import Landing from "./pages/Landing";
import Company from "./pages/Company";
import Education from './pages/Education';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/company" element={<Company />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
