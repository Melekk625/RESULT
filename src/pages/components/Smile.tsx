import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image'
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Smile({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] border-2 m-auto flex bg-[#191A23] mb-[140px] rounded-[45px]'>
            <div className='relative w-1/2 h-[500px]'>
                <Image src="/song.svg" alt="Smile" fill/>
            </div>
            <div className='flex justify-center items-center w-1/2 font-bold text-white'>
                <div>
                <p className='text-[44px]'>"At Positivus, we believe that success  is built on innovation, collaboration, and a relentless focus on delivering results."</p>
                <p className='mt-10 text-gray-300 font-normal'>-John Smith, Founder of Positivus</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Smile