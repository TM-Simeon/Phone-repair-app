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

