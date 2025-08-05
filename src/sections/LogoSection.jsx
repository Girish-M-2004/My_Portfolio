import React from 'react';
import { logoIconsList } from '../constants/index.js';

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />

      <div className='marquee h-12'>
        <div className='marquee-box md:gap-12 gap-5 flex items-center'>
          {logoIconsList.map((icon, index) => (
            <div key={`logo-${index}`} className='flex justify-center items-center h-full'>
              <img
                src={icon.imgPath}
                alt={`logo-${index}`}
                className='h-8 md:h-10 w-auto object-contain'
              />
            </div>
          ))}

          {/* Repeat for seamless marquee effect */}
          {logoIconsList.map((icon, index) => (
            <div key={`logo-copy-${index}`} className='flex justify-center items-center h-full'>
              <img
                src={icon.imgPath}
                alt={`logo-copy-${index}`}
                className='h-8 md:h-10 w-auto object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;