import React, { useState } from 'react';
const Input = ({
  inputType,
  inputName,
  inputValue,
  inputPlaceholder,
  onChange,
}) => {
  // const [inputFields, setInputFields] = useState({
  //   inputName,
  //   inputValue
  // })
  // const onChange = (e) => {
  //   setInputFields({
  //     ...inputFields,
  //     [e.target.name]: e.target.value,
  //   });
  // console.log(inputValue, inputName);
  // };
  return (
    <>
      <div>
        <input
          type={inputType}
          name={inputName}
          id='input'
          value={inputValue}
          placeholder={inputPlaceholder}
          // width: "600px", height: "60px",
          className='w-full p-[9px_0px_10px_16px] bg-[#ffff] text-[#6F6F6F] placeholder-[#6F6F6F] border border-[#6F6F6F] text-[16px] rounded-full pl-[20px]'
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Input;
