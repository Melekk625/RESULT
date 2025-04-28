import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';

// Google font konfiqurasiyası
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

// FC tipi ilə komponenti müəyyən edirik
const Navigate: React.FC = () => {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex max-w-[90%] m-auto my-[70px] justify-between flex-wrap gap-10">
        <div className="w-[37.5%] min-w-[300px] order-1 sm:order-0 md:order-1 lg:order-0">
          <h1 className="font-medium text-[60px] leading-[100%] tracking-[0%]">
            Navigating the digital landscape for success
          </h1>
          <p className="font-normal text-[20px] leading-[28px] tracking-[0%] mt-6">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button className="bg-black text-white py-[20px] px-[35px] rounded-[14px] mt-[35px] hover:bg-[#222] transition">
            Book a consultation
          </button>
        </div>

        <div className="w-1/2 min-w-[300px] ml-7 order-0 sm:order-1">
          <Image
            src="/song.svg"
            width={600.46}
            height={515}
            alt="Song"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navigate;