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
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/technician" element={<Technician/>} />
          <Route exact path="/support" element={<Support/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



import React from 'react';
import Image from './logo.PNG';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="logo" activeClassName="active-link">
      <img src={Image} alt="logo"/>
        
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" exact className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/technician" className="nav-link" activeClassName="active-link">Technician</NavLink>
        <NavLink to="/support" className="nav-link" activeClassName="active-link">Support</NavLink>
      </div>
    </nav>
  );
};

export default Header;


import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="we-do">
        <h1>WE LINK USERS WITH RELIABLE <br/> TECHNICIANS</h1>
        <h4>we take pride in ensuring your phone runs smoothly</h4>
        <button>Find a technician</button>
      </div>
    </div>
  )
}

export default Home;

