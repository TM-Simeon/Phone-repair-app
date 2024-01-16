import React from 'react';

const Textarea = ({
  inputType,
  inputName,
  inputValue,
  inputPlaceholder,
  onChange,
}) => {
  return (
    <div>
      <textarea
        cols='10'
        rows='2'
        placeholder={inputPlaceholder}
        name={inputName}
        type={inputType}
        value={inputValue}
        onChange={onChange}
        className='w-[100%] p-[5px_9px_5px_6px] lg:p-[9px_px_10px_24px] bg-white text-black placeholder-[#918B83] border border-[#413E3A] text-[12px] lg:text-[14px] font-body rounded-lg'
      ></textarea>
    </div>
  );
};

export default Textarea;
