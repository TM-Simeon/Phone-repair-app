import React, { useState } from 'react';
import Input from './input/Input';
import Textarea from './textarea/Textarea';

const FindATechnician = () => {
  const [note, setNote] = useState(false);
  const noteFunction = () => {
    setNote(!note);
  };
  return (
    <div>
      <form className='w-full lg:w-[603px] mx-auto'>
        <div>
          <div className='mt-6'>
            <Input inputPlaceholder={'Your current location'} />
          </div>
          <div className='mt-6 flex flex-col gap-y-5'>
            <Input inputPlaceholder={"Technician's location"} />
          </div>
          <div className='mt-6 grid grid-cols-12 items-center'>
            <div className='col-span-12 lg:col-span-6'>
              <Input inputPlaceholder={'Speciality'} />
            </div>
            <div className='col-span-12 lg:col-span-6 mt-6 lg:mt-0'>
              <Input inputPlaceholder={'phone model (Optional)'} />
            </div>
          </div>
          <p className='font-body text-lg mt-4'>Describe your phone issue</p>
          <div className='mt-4'>
            <Input inputPlaceholder={'Hardware'} />
          </div>
        </div>
        <div className='mt-6'>
          <div
            onClick={noteFunction}
            className='w-[100%] p-[10px_24px_10px_24px] bg-white text-[#6F6F6F] border border-[#413E3A] text-[14px] lg:text-[16px] rounded-full text-center'
          >
            Leave a note
          </div>
          <div className='mt-4 mb-8'>{note && <Textarea />}</div>
        </div>
        <div className='text-end'>
          <button className='bg-[#EC8206] w-[127px] rounded-full text-white h-[35px] lg:h-[50px]'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindATechnician;
