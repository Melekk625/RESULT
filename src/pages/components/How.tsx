import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {}

function How({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='flex flex-col sm:flex-row max-w-[90%] m-auto mb-[85px]'>
        {/* Title Section */}
        <div className='gap-2.5 px-[7px] mr-10 text-[32px] sm:text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flex justify-center items-center font-medium mb-6 sm:mb-0'>
          <h2>How We Work: SEO Process</h2>
        </div>

        {/* Description Section */}
        <div className='font-normal text-[16px] sm:text-[18px] leading-[100%]'>
          <p>Our step-by-step SEO process ensures your website</p>
          <p>ranks higher, attracts more traffic, and drives lasting</p>
          <p>results.</p>
        </div>
      </div>
    </div>
  )
}

export default How;
