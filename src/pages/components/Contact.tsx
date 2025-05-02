import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Contact({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='flex flex-col md:flex-row max-w-[90%] m-auto mb-12 md:mb-[85px] gap-6 md:gap-10'>
        
        {/* Title Badge */}
        <div className='bg-[#B9FF66] px-4 py-2 text-2xl md:text-[40px] rounded-[7px] flex justify-center items-center font-medium leading-none'>
          <h2>Contact Us</h2>
        </div>

        {/* Description */}
        <div className='text-base md:text-[18px] leading-snug'>
          <p>Connect with Us: Let's Discuss Your</p>
          <p>Digital Marketing Needs</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
