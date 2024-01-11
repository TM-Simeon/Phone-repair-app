import React, { useState } from 'react';
import Image from '../icons/logo.svg'
import { NavLink } from 'react-router-dom';
import './header.css';
import './footer.css';

const Header = () => {
  const [navbarOpen, setNavbar] = useState(false);
  return (
    <nav className='navbar'>
      <NavLink to='/' exact className='logo' activeClassName='active-link'>
        <img src={Image} alt='logo' />
      </NavLink>
      <div className='nav-links'>
        {/* i added font-family and font-weight to the links below */}
        <NavLink
          to='/'
          exact
          className='nav-link font-body font-[400]'
          activeClassName='active-link'
        >
          Home
        </NavLink>
        <NavLink
          to='/technician'
          className='nav-link font-body font-[400]'
          activeClassName='active-link'
        >
          Technician
        </NavLink>
        <NavLink
          to='/support'
          className='nav-link'
          activeClassName='active-link font-body font-[400]'
        >
          Support
        </NavLink>
      </div>
      <div
        className='hamburger d-sm-block d-md-block d-lg-block d-xl-none'
        onClick={() => setNavbar(!navbarOpen)}
      >
        <div className={!navbarOpen ? 'bar' : 'bar one'}></div>
        <div className={!navbarOpen ? 'bar' : 'bar two'}></div>
        <div className={!navbarOpen ? 'bar' : 'bar three'}></div>
      </div>
    </nav>
  );
};

export default Header;

