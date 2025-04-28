import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
    weight: '400',
    subsets: ['latin'],
  });
type Props = {}

export default function Black({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='flex max-w-[90%] m-auto bg-[#191A23] py-[70px] px-[60px] rounded-[45px] mb-[140px]'>
            <div className='font-normal text-[#FFFFFF] text-[18px] ml-[14px] relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-[1px] before:h-45 before:bg-amber-50'><p className='mr-8'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p><div className='font-normal text-[20px] leading-[28px] text-[#B9FF66] mt-5'><span>Learn more</span><ArrowOutwardIcon/></div></div>
            <div className='font-normal text-[#FFFFFF] text-[18px]  px-[64px] relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-[1px] before:h-45 before:bg-amber-50'><p>  For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p><div className='font-normal text-[20px] leading-[28px] text-[#B9FF66] mt-5'><span>Learn more</span><ArrowOutwardIcon/></div></div>
            <div className='font-normal text-[#FFFFFF] text-[18px] ml-[64px]'><p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p><div className='font-normal text-[20px] leading-[28px] text-[#B9FF66] mt-5'><span>Learn more</span><ArrowOutwardIcon/></div></div>
        </div>
    </div>
  )
}