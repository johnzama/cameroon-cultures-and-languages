import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Languages from './components/Languages';
import Cultures from './components/Cultures';
import Foods from './components/Foods';
import Traditions from './components/Traditions';
import Regions from './components/Regions';
import Map from './components/Map';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/languages">Languages</Link></li>
            <li><Link to="/cultures">Cultures</Link></li>
            <li><Link to="/foods">Foods</Link></li>
            <li><Link to="/traditions">Traditions</Link></li>
            <li><Link to="/regions">Regions</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/cultures" element={<Cultures />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/traditions" element={<Traditions />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/map" element={<Map />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

