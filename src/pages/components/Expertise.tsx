import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image'
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Expertise({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] m-auto flex mb-[140px]'>
            <div className='w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8 mr-16'><div className='w-3/5 m-auto relative h-[100px] my-10'><Image src="/hih.png" alt="Green" fill/></div><h4 className='font-bold text-[20px] mb-10'>Best Small Business Digital Marketing Agency of the Year</h4><p>Celebrating our success in delivering innovative strategies and measurable results for small bussiness clients.</p></div>
            <div className='w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8 mr-14'><div className='w-3/5 m-auto relative h-[100px] my-10'><Image src="/third.png" alt="Green" fill/></div><h4 className='font-bold text-[20px] mb-10'>Best Small Business Digital Marketing Agency of the Year</h4><p>Celebrating our success in delivering innovative strategies and measurable results for small bussiness clients.</p></div>
            <div className='w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8 mr-14'><div className='w-3/5 m-auto relative h-[100px] my-10'><Image src="/digital.png" alt="Green" fill/></div><h4 className='font-bold text-[20px] mb-10'>Best Small Business Digital Marketing Agency of the Year</h4><p>Celebrating our success in delivering innovative strategies and measurable results for small bussiness clients.</p></div>
            <div className='w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8'><div className='w-3/5 m-auto relative h-[100px] my-10'><Image src="/social.png" alt="Green" fill/></div><h4 className='font-bold text-[20px] mb-10'>Best Small Business Digital Marketing Agency of the Year</h4><p>Celebrating our success in delivering innovative strategies and measurable results for small bussiness clients.</p></div>
       
        </div>
    </div>
  )
}

export default Expertise