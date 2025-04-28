import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {}

function Team({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex max-w-[90%] m-auto mb-[50px] sm:mb-[85px] flex-col sm:flex-row">
        {/* Title Section */}
        <div className="gap-2.5 px-[7px] mr-10 text-[30px] sm:text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flex justify-center items-center font-medium mb-4 sm:mb-0">
          <h2>Team</h2>
        </div>

        {/* Description Section */}
        <div className="font-normal text-[16px] sm:text-[18px] leading-[140%] text-center sm:text-left">
          <p>Meet the skilled and experienced team behind our</p>
          <p>successful digital marketing strategies</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
