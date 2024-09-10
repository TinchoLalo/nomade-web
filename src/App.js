import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Menu } from './components/menu';
import Landing from "./pages/Landing";
import Nosotros from './pages/Nosotros';
import Soluciones from './pages/NuestrasSoluciones';

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
