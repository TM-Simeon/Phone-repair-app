import React from 'react'

const Button = ({ buttonText, buttonColor,width,height }) => {
  return (
      <button className={`bg-[${buttonColor}] rounded-full text-white ${width} ${height} text-sm`}>
        {buttonText}
      </button>
  );
};

export default Button
