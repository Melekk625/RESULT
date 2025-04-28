import React from 'react'
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
    weight: '400',
    subsets: ['latin'],
  });
type Props = {}

function UseCase({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
    <div className='flex max-w-[90%] m-auto mb-[85px]'>
        <div className='gap-2.5 px-[7px] mr-10 text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flex justify-center items-center font-medium'><h2>Use Cases</h2></div>
        <div className='font-normal text-[18px] leading-[100%]'><p>Explore Real-Life Examples of Our Proven Digital Marketing</p> <p>Success through Our Case Studies</p></div>
    </div>
</div>
  )
}

export default UseCase