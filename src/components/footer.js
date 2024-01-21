import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/footerLogo.png';
import Twitter from '../icons/twitter.png';
import Facebook from '../icons/facebook.png';
import Instagram from '../icons/instagram.png';
import './footer.css';

const Footer = () => {
  return (
    // <img src="../logo.png">
    <footer className='footer'>
      <div className='container max-w-7xl mx-auto lg:px-0'>
        <img src={Image} alt='logo' className='footerLogo' />
        <div className='flex mt-6 mb-16 justify-between'>
          <h4 className='text-left '>Effortless Repairs at Your Fingertips</h4>
          <div className=''>
            <div className='flex items-center gap-[20px]'>
              <img
                src={Twitter}
                alt='twitter icon'
                className='w-[30px] h-[30px]'
              />
              <img
                src={Facebook}
                alt='facebook icon'
                className='w-[30px] h-[30px]'
              />
              <img
                src={Instagram}
                alt='instagram icon'
                className='w-[30px] h-[30px]'
              />
            </div>
          </div>
        </div>
        <hr />
        <div className='flex lg:justify-between lg:items-end mt-12'>
          <div className='flex flex-wrap lg:gap-[32px]'>
            <Link to='/technician'>Find a technician</Link>
            <Link to='/support'>Support</Link>
            <Link to='/technician'>Account</Link>
          </div>
          <div className='flex flex-wrap lg:gap-[32px]'>
            <Link to='/technician'>Warranty</Link>
            <Link to='/technician'>About us</Link>
            <Link to='/technician'>Review</Link>
          </div>
        </div>
        <div className='flex justify-between mt-10 '>
          <div>
            <p className='text-left mb-4 font-bold'>Chat with us</p>
            <p className='text-secondary'>hello@gadgetglide.co</p>
          </div>
          <div className='flex flex-wrap text-secondary lg:gap-[25px]'>
            <Link to='/technician' className='underline'>
              Privacy policy
            </Link>
            <Link to='/technician' className='underline'>
              Cookies
            </Link>
            <Link to='/technician' className='underline'>
              FAQS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
