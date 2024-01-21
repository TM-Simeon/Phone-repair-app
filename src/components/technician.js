import React from 'react';
import FindATechnician from './find-a-technician/FindATechnician';
import findAtechnicianImg from '../images/findAtechnicianImg.png';
import './technician.css';
import MostUsedTechnician from './most-used-technician/MostUsedTechnician';

const Technician = () => {
  return (
    <div className='bg-origins'>
      <div className='container max-w-7xl mx-auto px-5 pt-10'>
        <div className='text-xl lg:text-[35px] leading-[2rem] text-[#3D3D3D] font-heading'>
          Find a technician
        </div>
        <div className='mb-[100px]'>
          <div className='xl:flex lg:flex-wrap lg:justify-between items-start'>
            <div className=''>
              <FindATechnician />
            </div>
            <div className='hidden xl:block'>
              <img
                src={findAtechnicianImg}
                alt='img'
                className='h-[403px] lg:w-[552px] w-full'
              />
            </div>
          </div>
        </div>
        <div className='text-xl lg:text-2xl pb-[32px] font-heading'>
          Most used technicians
        </div>
      </div>
        {/* <div className='lg:container max-w-7xl mx-auto mb-[110px]'>
          <MostUsedTechnician />
        </div> */}
    </div>
  );
};

export default Technician;
