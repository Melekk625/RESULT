import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

export default function Working({}) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex flex-col md:flex-row max-w-[90%] m-auto mb-[70px] items-center gap-6 md:gap-10">
        <div className="flex gap-2.5 px-3 md:px-5 text-[32px] md:text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] justify-center items-center font-medium py-2">
          <h2 className="text-center">Our Working Process</h2>
        </div>
        <div className="font-normal text-[16px] md:text-[18px] leading-[140%] text-center md:text-left">
          <p>Step-by-Step Guide to Achieving</p> 
          <p>Your Business Goals</p>
        </div>

      </div>
    </div>
  )
}
