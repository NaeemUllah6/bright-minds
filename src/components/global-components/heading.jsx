import React from 'react';

function Heading({ text, weight = 400, size = 40, className = '' }) {
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
  }[weight] || 'font-normal';

  const fontSizeClass = {
    20: 'text-[16px] sm:text-[20px]',
    30: 'text-[20px] sm:text-[30px]',
    40: 'text-[24px] sm:text-[40px]',
    60: 'text-[32px] sm:text-[60px]',
  }[size] || 'text-[24px] sm:text-[40px]';

  return (
    <h2 className={`${fontSizeClass} ${fontWeightClass} ${className}`}>
      {text}
    </h2>
  );
}

export default Heading;
