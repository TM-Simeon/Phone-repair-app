import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../icons/logo.svg';
import harmbuger from '../icons/hamburger.svg';
import './header.css';
import './footer.css';

const Header = () => {
  const [navbarOpen, setNavbar] = useState(false);
  return (
    <div className='relative'>
      <nav className='navbar'>
        <NavLink to='/' exact className='logo' activeClassName='active-link'>
          <img src={Image} alt='logo' />
        </NavLink>
        {/* Desktop navbar */}
        <div className='nav-links hidden lg:mx-auto lg:flex lg:items-center '>
          {/* i added font-family and font-weight to the links below */}
          <NavLink
            to='/'
            exact
            className='nav-link font-body font-[400]'
            activeclassname='active-link'
          >
            Home
          </NavLink>
          <NavLink
            to='/technician'
            className='nav-link font-body font-[400]'
            activeclassname='active-link'
          >
            Technician
          </NavLink>
          <NavLink
            to='/support'
            className='nav-link  font-body font-[400]'
            activeclassname='active-link'
          >
            Support
          </NavLink>
        </div>
        {/* mobile navbar  */}
        <div
          style={{
            transition: 'all .5s',
            visibility: navbarOpen ? 'visible' : 'hidden',
            left: navbarOpen ? '225px' : '-200px',
          }}
          className='absolute right-0 bg-[#EFF0FC] rounded-[10px] lg:hidden w-[40%] top-[80px]'
        >
          {navbarOpen && (
            <div className='nav-links flex flex-col justify-end py-[19px] px-[15px]'>
              {/* i added font-family and font-weight to the links below */}
              <NavLink
                to='/'
                exact
                className='nav-link font-body font-[400]'
                activeclassname='active-link'
                onClick={() => {
                  setNavbar(false);
                }}
              >
                Home
              </NavLink>
              <div className='py-1'>
                <NavLink
                  to='/technician'
                  className='nav-link font-body font-[400]'
                  activeclassname='active-link'
                  onClick={() => {
                    setNavbar(false);
                  }}
                >
                  Technician
                </NavLink>
              </div>
              <NavLink
                to='/support'
                className='nav-link font-body font-[400]'
                activeclassname='active-link'
                onClick={() => {
                  setNavbar(false);
                }}
              >
                Support
              </NavLink>
            </div>
          )}
        </div>
        <div
          className='hamburger lg:hidden ml-auto'
          onClick={() => setNavbar(!navbarOpen)}
        >
          <div className={!navbarOpen ? 'bar' : 'bar one'}></div>
          <div className={!navbarOpen ? 'bar' : 'bar two'}></div>
          <div className={!navbarOpen ? 'bar' : 'bar three'}></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
