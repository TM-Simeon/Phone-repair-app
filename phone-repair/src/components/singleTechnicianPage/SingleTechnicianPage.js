import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

const SingleTechnicianPage = () => {
  // const { id } = useParams();
  // console.log(id, 'useParams id');
  const { state } = useLocation();
  //   const {id, img, name, experience, location, stars} = state.technician
  console.log(state, 'useLocation');
  //   const {img, name, experience, stars } =
  //     state;
  return (
    <div className='relative h-screen z-10'>
      <div className='bg-[#262A4F] h-[243px]'></div>
      <div className='container max-w-7xl mx-auto'>
        <div className='absolute top-[15%] flex items-end gap-5'>
          <img src={state.img} alt='img' className='w-[300px] h-[280px]' />
          <div className=''>
            <p className='text-2xl text-black'>{state.name}</p>
            <div className='flex gap-[10px]'>
              <div className='flex flex-col'>
                <p className='text-[#7F7F7F] text-[12px]'>Experience</p>
                <p className='text-black text-sm'>{state.experience}</p>
              </div>
              <div className='flex flex-col'>
                <p className='text-[#7F7F7F] text-[12px]'>Location</p>
                <p className='text-black text-sm'>{state.location}</p>
              </div>
            </div>
            <div className='mt-1'>
              <img src={state.stars} alt='img' className='w-[24px] h-[24px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTechnicianPage;
