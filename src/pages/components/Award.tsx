import React from 'react'
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Award({}: Props) {
  return (
        <div className={spaceGrotesk.className}>
        <div className='flex max-w-[90%] m-auto mb-[85px]'>
            <div className='gap-2.5 px-[7px] mr-10 text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flex justify-center items-center font-medium'><h2>Awards & Recognition</h2></div>
            <div className='font-normal text-[18px] leading-[100%]'><p>As Positivus, our commitment to excellence has been recognized </p> <p>by industry leaders.Here are some of our proudest achievements:</p></div>
        </div>
    </div>
  )
}

export default Award