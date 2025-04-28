import React from 'react'
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
    weight: '400',
    subsets: ['latin'],
  });
type Props = {}

export default function Case({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className=' max-w-[90%] m-auto mb-[85px] flow-root sm:flex'>
            <div className='my-8 sm:my-0 gap-2.5 px-[7px] mr-10 text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flow-root justify-center items-center sm:flex  font-medium '><h2 className='text-center sm:text-left'>Case Studies</h2></div>
            <div className='text-center sm:text-left font-normal text-[14px] sm:text-[18px] leading-[100%]'><p>Explore Real-Life Examples of Our Proven Digital Marketing</p> <p>Success through Our Case Studies</p></div>
        </div>
    </div>
  )
}