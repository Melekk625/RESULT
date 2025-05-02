import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function OutService({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex flex-col sm:flex-row max-w-[90%] m-auto mb-[85px] gap-6 sm:gap-0">
        {/* Heading Section */}
        <div className="gap-2.5 px-[7px] sm:px-[20px] text-[30px] sm:text-[40px] leading-[100%] rounded-[7px] bg-[#B9FF66] flex justify-center items-center font-medium mb-4 sm:mb-0">
          <h2>Our Other Services</h2>
        </div>

        {/* Description Section */}
        <div className="font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-center sm:text-left">
          <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
      </div>
    </div>
  );
}

export default OutService;
