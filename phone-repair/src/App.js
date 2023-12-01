import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Technician from './components/technician';
import Support from './components/support';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/technician" element={<Technician/>} />
          <Route exact path="/support" element={<Support/>} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;