import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import './App.scss';


function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation, header, or other shared components can go here */}
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          {/* Add more routes for additional pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
