import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Menu } from './components/menu';
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
