import React from 'react';
import Image from '../images/footerLogo.png';
import { NavLink } from 'react-router-dom';
import './header.css';
import './footer.css';

const Header = () => {
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
    </nav>
  );
};

export default Header;

