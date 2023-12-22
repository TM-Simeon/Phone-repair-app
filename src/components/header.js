import React from 'react';
import Image from '../images/footerLogo.png';
import { NavLink } from 'react-router-dom';
import './header.css';
import './footer.css';

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="logo" activeClassName="active-link">
    	<img src={Image} alt="logo" className="footerLogo"/>
        
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

