import React from 'react';

interface PillProps {
  text: string;
  color?: string;
  icon?: string;
}

const Pill =({text, icon, color} :PillProps ) =>{
  return (
    <span className={`inline-flex items-center justify-center px-2 py-1 text-sm font-medium text-white rounded-full ${color}`}>
      <img src={icon} className='pr-0.5'></img>
      <h1 className="regular-8">
        {text}
      </h1>
    </span>
  );
};

export default Pill;
