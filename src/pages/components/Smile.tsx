import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Smile({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='max-w-[90%] border-2 m-auto flex bg-[#191A23] mb-[140px] rounded-[45px]'>
        {/* Image Section */}
        <div className='relative w-full sm:w-1/2 h-[300px] sm:h-[500px]'>
          <Image src='/song.svg' alt='Smile' layout='fill' objectFit='cover' />
        </div>

        {/* Text Section */}
        <div className='flex justify-center items-center w-full sm:w-1/2 font-bold text-white p-6 sm:p-12'>
          <div>
            <p className='text-[24px] sm:text-[44px] leading-relaxed'>
              "At Positivus, we believe that success is built on innovation,
              collaboration, and a relentless focus on delivering results."
            </p>
            <p className='mt-8 text-gray-300 font-normal text-lg sm:text-[18px]'>
              - John Smith, Founder of Positivus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smile;
