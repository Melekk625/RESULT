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
      <div className='flex flex-col md:flex-row max-w-[90%] m-auto bg-[#191A23] py-[70px] px-[30px] md:px-[60px] rounded-[45px] mb-[140px]'>
        
        {/* 1-ci Kart */}
        <div className='w-full md:w-1/3 font-normal text-[#FFFFFF] text-[18px] p-4 md:pr-8 relative md:before:content-[""] md:before:absolute md:before:top-0 md:before:right-0 md:before:w-[1px] md:before:h-full md:before:bg-[#B9FF66]'>
          <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <div className='font-normal text-[20px] leading-[28px] text-[#B9FF66] mt-5 flex items-center gap-2'>
            <span>Learn more</span>
            <ArrowOutwardIcon fontSize="small" />
          </div>
        </div>

        {/* 2-ci Kart */}
        <div className='w-full md:w-1/3 font-normal text-[#FFFFFF] text-[18px] p-4 md:px-8 relative md:before:content-[""] md:before:absolute md:before:top-0 md:before:right-0 md:before:w-[1px] md:before:h-full md:before:bg-[#B9FF66]'>
          <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <div className='font-normal text-[20px] leading-[28px] text-[#B9FF66] mt-5 flex items-center gap-2'>
            <span>Learn more</span>
            <ArrowOutwardIcon fontSize="small" />
          </div>
        </div>

        {/* 3-cü Kart */}
        <div className='w-full md:w-1/3 font-normal text-[#FFFFFF] text-[18px] p-4 md:pl-8'>
          <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <div className='font-normal text-[20px] leading-[28px] text-[#B9FF66] mt-5 flex items-center gap-2'>
            <span>Learn more</span>
            <ArrowOutwardIcon fontSize="small" />
          </div>
        </div>

      </div>
    </div>
  )
}
