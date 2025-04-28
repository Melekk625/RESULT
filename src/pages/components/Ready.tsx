import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Ready({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] m-auto p-16 border-[1px] boredr-red-500 rounded-[45px] flex items-center mb-[140px] border-b-6'>
            <div className='w-1/2'>

            <h5 className='text-3xl font-bold'>Ready to Elevate Your Search Rankings?</h5>
            <hr className='my-8'/>
            <p className='text-[16px]'>Our proven SEO strategies are designed to help your business achieve long-lasting success in search engines.Whether you want to boost organic traffic, improve keyword rankings,or increase conversions, we're here to make it happen.</p>

            <p className='my-8 font-bold text-[16px]'>Let's work together to grow your online presence.</p>
            <button className='w-full rounded-[12px] py-4 bg-[#B9FF66] font-medium'>Start My SEO Journey</button>
            </div>
            <div className='relative w-1/2 h-[400px]'>
                <Image src="/Robot.jpg" fill alt="Robot"/>
            </div>
        </div>
    </div>
  )
}

export default Ready