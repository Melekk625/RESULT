import React from 'react'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Marketing({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
               <div className='flex max-w-[90%] m-auto my-[70px] rounded-[45px] bg-[#E3E3E3]'>
               <div className='w-[600px] h-[500px] relative mr-16'>
                               <Image
                                           src="/red.png"
                                           alt="Star"
                                           fill
                                           className='rounded-l-[45px]'
                                         />
                           </div>
                   <div className='w-[38%] flex justify-center items-start pt-16 ml-8'>
                   <div>
   
                       <h2 className="font-medium text-[60px] leading-[100%] tracking-[0%]">Expert Digital Marketing Services</h2>
                       <p className="font-normal text-[25px] leading-[28px] tracking-[0%] mt-6">Unlock your business's with tailored strategies designed to drive growth and deliver results.</p>
                   </div>
                   </div>
               </div>
           </div>
  )
}

export default Marketing