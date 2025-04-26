import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

export default function Working({}) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex max-w-[90%] m-auto mb-[70px] items-center">
        
        <div className="flex gap-2.5 px-[7px] mr-10 text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] justify-center items-center font-medium py-1">
          <h2>Our Working Process </h2>
        </div>

        <div className="font-normal text-[18px] leading-[140%]">
          <p>Step-by-Step Guide to Achieving </p> 
          <p>Your Business Goals</p>
        </div>

      </div>
    </div>
  )
}