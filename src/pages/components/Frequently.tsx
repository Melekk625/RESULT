import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Frequently({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='flex max-w-[90%] m-auto my-[140px]'>
        <div className='text-black w-2/5'><div><span className='bg-[#B9FF66] p-2 rounded-[7px] text-[24px] font-bold'>Frequantly Asked</span>
        <div className='mt-[9px]'><span className='bg-[#B9FF66] p-1.5 rounded-[7px] text-[24px] font-bold'>Questions</span></div></div></div>

        </div>
    </div>
  )
}

export default Frequently