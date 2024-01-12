import React from 'react';
import FindATechnician from './find-a-technician/FindATechnician';
import findAtechnicianImg from '../images/findAtechnicianImg.png';
import './technician.css';
import MostUsedTechnician from './most-used-technician/MostUsedTechnician';

const Technician = () => {
  return (
    <div className='bg-[#FFFFF]'>
      <div className='container max-w-7xl mx-auto px-5 pt-10'>
        <div className='text-xl lg:text-[40px] leading-[2.5rem] text-[#3D3D3D] font-heading'>
          Find a technician
        </div>
        <div className='mb-[100px]'>
          <div className='lg:flex lg:flex-wrap lg:justify-between items-center'>
            <div className=''>
              <FindATechnician />
            </div>
            <div className='hidden lg:block'>
              <img
                src={findAtechnicianImg}
                alt='img'
                className='h-[473px] lg:w-[602px] w-full'
              />
            </div>
          </div>
        </div>
        <div className='text-[24px] mb-[32px] font-heading'>
          Most used technicians
        </div>
        <div className='mb-[110px]'>
          <MostUsedTechnician />
        </div>
      </div>
    </div>
  );
};

export default Technician;
