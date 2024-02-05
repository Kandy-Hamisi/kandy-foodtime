import React from 'react';

const Button = ({ type, text, color }) => {
  const defaultStyles = 'py-3 w-[150px] px-4 rounded-full'; // Add your default styles here

  return (
    <button className={`${defaultStyles} ${type === 'outline' ? `bg-transparent text-${color} border-2 border-${color}` : `bg-${color} text-white`}`}>
      {text}
    </button>
  );
};

export default Button;
