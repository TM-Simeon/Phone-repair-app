import React from 'react';
import { Link } from 'react-router-dom';
// import img1 from '../../images/Rectangle 111.png';
import Technicians from '../../data/Technicians';

const MostUsedTechnician = () => {
  return (
    <div className='flex justify-center lg:justify-center items-center gap-[20px] lg:gap-[20px] overflow-scroll no-scrollbar pl-[320px] md:pl-[80px] pr-4'>
      {Technicians.map(({ id, img, name, experience, location, stars }) => (
        <Link
          to={`/SingleTechnicianPage`}
          state={{ id, img, name, experience, location, stars }}
        >
          <div
            key={id}
            className='bg-[#262A4F] rounded-[10px] px-[13px] lg:px-[23px] py-[19px] flex gap-[20px] lg:max-w-[310px] w-[310px]'
          >
            <img src={img} alt='img' className='w-[90px] h-[90px]' />
            <div>
              <p className='text-xl text-white'>{name}</p>
              <div className='flex gap-[10px]'>
                <div className='flex flex-col'>
                  <p className='text-[#7F7F7F] text-[12px]'>Experience</p>
                  <p className='text-white text-sm'>{experience}</p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-[#7F7F7F] text-[12px]'>Location</p>
                  <p className='text-white text-sm'>{location}</p>
                </div>
              </div>
              <div className='mt-1'>
                <img src={stars} alt='img' className='w-full h-[20px]' />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostUsedTechnician;
