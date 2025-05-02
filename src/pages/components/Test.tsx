import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {}

function Test({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='flex flex-col md:flex-row items-start md:items-center max-w-[90%] m-auto mb-[85px] gap-4 md:gap-10'>
        <div className='text-[28px] md:text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] px-4 py-2 font-medium text-center'>
          <h2>Testimonials</h2>
        </div>
        <div className='text-[16px] md:text-[18px] leading-snug'>
          <p>Hear from Our Satisfied Clients: Read Our Testimonials</p>
          <p>to Learn More about Our Digital Marketing Services</p>
        </div>
      </div>
    </div>
  );
}

export default Test;
