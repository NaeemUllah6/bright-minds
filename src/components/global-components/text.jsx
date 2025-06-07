import React from 'react';

function Text({ text, weight = 300, size = 20, className = '' }) {
  const fontWeightClass = {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
  }[weight] || 'font-light';

  const fontSizeClass = {
    14: 'text-[14px] sm:text-[14px]',
    16: 'text-[14px] sm:text-[16px]',
    20: 'text-[14px] sm:text-[20px]',
    24: 'text-[14px] sm:text-[24px]',
  }[size] || 'text-[14px] sm:text-[14px]';

  return (
    <p className={`${fontSizeClass} ${fontWeightClass} ${className}`}>
      {text}
    </p>
  );
}

export default Text;
