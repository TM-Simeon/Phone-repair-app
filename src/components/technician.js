
import React from 'react';
import FindATechnician from './find-a-technician/FindATechnician';
import findAtechnicianImg from '../images/findAtechnicianImg.png';
import './technician.css';
import MostUsedTechnician from './most-used-technician/MostUsedTechnician';

const Technician = () => {
  return (
    <div className='bg-[#FEFBF7]'>
      <div className='container max-w-7xl mx-auto pt-10'>
        <div className='text-[40px] leading-[2.5rem] text-[#3D3D3D]'>
          Find a technician
        </div>
        <div className='mb-[100px]'>
          <div className='flex justify-between items-center'>
            <div className=''>
              <FindATechnician />
            </div>
            <div>
              <img src={findAtechnicianImg} alt='img' className='h-[473px] w-[602px]' />
            </div>
          </div>
        </div>
        <div className='text-[24px] mb-[32px]'>Most used technicians</div>
		<div className='mb-[110px]'>
			<MostUsedTechnician />
		</div>
      </div>
    </div>
  );
};

export default Technician;
