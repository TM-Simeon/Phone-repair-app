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
      <form className='w-[603px]'>
        <div>
          <div className='mt-6'>
            <Input inputPlaceholder={'Your current location'} />
          </div>
          <div className='mt-6 flex flex-col gap-y-5'>
            <Input inputPlaceholder={"Technician's location"} />
          </div>
          <div className='mt-6 flex justify-between gap-[31px]'>
            <Input inputPlaceholder={'Speciality'} />
            <Input inputPlaceholder={'phone model (Optional)'} />
          </div>
          <div className='mt-6'>
            <Input inputPlaceholder={'Hardware'} />
          </div>
        </div>
        <div className='mt-6'>
          <div
            onClick={noteFunction}
            className='w-[100%] p-[5px_9px_5px_6px] lg:p-[10px_24px_10px_24px] bg-white text-[#6F6F6F] border border-[#413E3A] text-[12px] lg:text-[16px] rounded-full text-center'
          >
            Leave a note
          </div>
          <div className='mt-4 mb-8'>{note && <Textarea />}</div>
        </div>
        <div className='text-end mt-37px'>
          <button className='bg-[#EC8206] w-[127px] rounded-full text-white h-[50px]'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindATechnician;
