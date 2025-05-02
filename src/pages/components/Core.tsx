import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {}

function Core({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='flex flex-col sm:flex-row max-w-[90%] m-auto mb-[85px] mt-[140px]'>
        {/* Title Section */}
        <div className='gap-2.5 px-[7px] mr-10 text-[36px] sm:text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flex justify-center items-center font-medium w-full sm:w-auto'>
          <h2 className='text-center sm:text-left'>Core Values</h2>
        </div>
        
        {/* Description Section */}
        <div className='font-normal text-[16px] sm:text-[18px] leading-[150%] mt-4 sm:mt-0'>
          <p className='text-center sm:text-left'>At the heart of everything we do</p>
          <p className='text-center sm:text-left'>are our core values:</p>
        </div>
      </div>
    </div>
  );
}

export default Core;
