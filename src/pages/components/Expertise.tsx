import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Expertise({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="max-w-[90%] m-auto flex flex-wrap justify-between mb-[140px] gap-8">
        {/* Expertise Card 1 */}
        <div className="w-full sm:w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8">
          <div className="w-3/5 m-auto relative h-[100px] my-10">
            <Image src="/hih.png" alt="Green" fill />
          </div>
          <h4 className="font-bold text-[18px] sm:text-[20px] mb-6">
            Best Small Business Digital Marketing Agency of the Year
          </h4>
          <p className="text-[16px] sm:text-[18px]">
            Celebrating our success in delivering innovative strategies and measurable results for small business clients.
          </p>
        </div>

        {/* Expertise Card 2 */}
        <div className="w-full sm:w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8">
          <div className="w-3/5 m-auto relative h-[100px] my-10">
            <Image src="/third.png" alt="Green" fill />
          </div>
          <h4 className="font-bold text-[18px] sm:text-[20px] mb-6">
            Best Small Business Digital Marketing Agency of the Year
          </h4>
          <p className="text-[16px] sm:text-[18px]">
            Celebrating our success in delivering innovative strategies and measurable results for small business clients.
          </p>
        </div>

        {/* Expertise Card 3 */}
        <div className="w-full sm:w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8">
          <div className="w-3/5 m-auto relative h-[100px] my-10">
            <Image src="/digital.png" alt="Green" fill />
          </div>
          <h4 className="font-bold text-[18px] sm:text-[20px] mb-6">
            Best Small Business Digital Marketing Agency of the Year
          </h4>
          <p className="text-[16px] sm:text-[18px]">
            Celebrating our success in delivering innovative strategies and measurable results for small business clients.
          </p>
        </div>

        {/* Expertise Card 4 */}
        <div className="w-full sm:w-[22%] text-left rounded-[45px] bg-[#F3F3F3] p-8">
          <div className="w-3/5 m-auto relative h-[100px] my-10">
            <Image src="/social.png" alt="Green" fill />
          </div>
          <h4 className="font-bold text-[18px] sm:text-[20px] mb-6">
            Best Small Business Digital Marketing Agency of the Year
          </h4>
          <p className="text-[16px] sm:text-[18px]">
            Celebrating our success in delivering innovative strategies and measurable results for small business clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
