import React from 'react';
import Image from 'next/image';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Marketing({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex flex-col sm:flex-row max-w-[90%] m-auto my-[70px] rounded-[45px] bg-[#E3E3E3] p-6 sm:p-12">
        {/* Left Section: Image */}
        <div className="w-full sm:w-[600px] h-[300px] sm:h-[500px] relative mb-6 sm:mb-0 sm:mr-16">
          <Image
            src="/red.png"
            alt="Star"
            fill
            className="rounded-l-[45px] object-cover"
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-full sm:w-[38%] flex justify-center items-start pt-6 sm:pt-16 ml-0 sm:ml-8">
          <div>
            <h2 className="font-medium text-[40px] sm:text-[60px] leading-[100%] tracking-[-1%]">
              Expert Digital Marketing Services
            </h2>
            <p className="font-normal text-[18px] sm:text-[25px] leading-[28px] tracking-[-0.5%] mt-6">
              Unlock your business's potential with tailored strategies designed to drive growth and deliver results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
