import React from 'react';

const Button = ({
  buttonText = '',
  buttonColor = '',
  width = '',
  height = '',
}) => {
  return (
    <button
      className={`bg-[${buttonColor}] rounded-full text-white ${width} ${height} text-sm`}
    >
      {/* bg-[#A42020] */}
      {/* bg-[#446F35] */}
      {buttonText}
    </button>
  );
};

export default Button;
