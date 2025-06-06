import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Ecommerce({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='flex flex-col sm:flex-row max-w-[90%] m-auto bg-[#191A23] py-[70px] px-[20px] sm:px-[60px] rounded-[45px] mb-[140px]'>
        
        {/* Ecommerce Fashion Brand Card */}
        <div className='font-normal text-[#FFFFFF] text-[16px] sm:text-[18px] ml-[14px] relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-[1px] before:h-70 before:bg-amber-50 mb-6 sm:mb-0'>
          <h3 className='text-2xl sm:text-4xl mb-4'>E-commerce Fashion Brand</h3>
          <p className='mr-8'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <div className='font-normal text-[18px] sm:text-[20px] leading-[28px] text-[#B9FF66] mt-5 flex items-center'>
            <span>Learn more</span>
            <ArrowOutwardIcon fontSize='small' className='ml-2' />
          </div>
        </div>

        {/* Local Restaurant Chain Card */}
        <div className='font-normal text-[#FFFFFF] text-[16px] sm:text-[18px] px-[20px] sm:px-[64px] relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-[1px] before:h-70 before:bg-amber-50 mb-6 sm:mb-0'>
          <h3 className='text-2xl sm:text-4xl mb-4'>Local Restaurant Chain</h3>
          <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <div className='font-normal text-[18px] sm:text-[20px] leading-[28px] text-[#B9FF66] mt-5 flex items-center'>
            <span>Learn more</span>
            <ArrowOutwardIcon fontSize='small' className='ml-2' />
          </div>
        </div>

        {/* Healthcare Provider Card */}
        <div className='font-normal text-[#FFFFFF] text-[16px] sm:text-[18px] ml-[14px] sm:ml-[64px]'>
          <h3 className='text-2xl sm:text-4xl mb-4'>Healthcare Provider</h3>
          <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <div className='font-normal text-[18px] sm:text-[20px] leading-[28px] text-[#B9FF66] mt-5 flex items-center'>
            <span>Learn more</span>
            <ArrowOutwardIcon fontSize='small' className='ml-2' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
