import React from 'react';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

const Search: React.FC = () => {
  return (
    <div className={spaceGrotesk.className}>
      <div className="mb-[100px]">
        <div className="max-w-[90%] m-auto flex flex-wrap gap-8 justify-center">

          {/* CARD 1: Search Engine Optimization */}
          <div className="flex flex-col md:flex-row w-full md:w-[45%] border-2 p-8 md:p-10 rounded-[45px] bg-[#F3F3F3]">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <span className="text-[24px] font-bold bg-[#B9FF66] pl-2 rounded-[7px]">Search engine</span>
              <div>

              <span className="text-[20px] font-bold mt-2 mb-6 bg-[#B9FF66] pl-2 rounded-[7px] w-[90%] max-w-[300px]">optimization</span>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-10 h-10 flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex justify-center items-center">
              <Image src="/search.png" alt="Search" fill className="object-contain" priority />
            </div>
          </div>

          {/* CARD 2: Pay-per-click Advertising */}
          <div className="flex flex-col md:flex-row w-full md:w-[45%] border-2 p-8 md:p-10 rounded-[45px] bg-[#B9FF66]">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <p className="text-[24px] font-bold bg-white pl-2 rounded-[7px]">Pay-per-click</p>
              <span className="text-[21px] font-bold mt-2 mb-6 bg-white pl-2 rounded-[7px] w-[90%] max-w-[300px]">advertising</span>
              <div className="flex items-center gap-2 mt-8">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-10 h-10 flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex justify-center items-center">
              <Image src="/arrow.png" alt="Arrow" fill className="object-contain" priority />
            </div>
          </div>

          {/* CARD 3: Social Media Marketing */}
          <div className="flex flex-col md:flex-row w-full md:w-[45%] border-2 p-8 md:p-10 rounded-[45px] bg-[#191A23]">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <p className="text-[24px] font-bold bg-[#B9FF66] pl-2 rounded-[7px]">Social Media</p>
              <span className="text-[24px] font-bold mt-2 mb-6 bg-[#B9FF66] pl-2 rounded-[7px] w-[80%] max-w-[300px]">Marketing</span>
              <div className="flex items-center gap-2 mt-8">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-white w-10 h-10 flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" className="text-black" />
                </Link>
                <span className="font-normal text-[20px] leading-[28px] text-white">Learn more</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex justify-center items-center">
              <Image src="/smile.png" alt="Smile" fill className="object-contain" priority />
            </div>
          </div>

          {/* CARD 4: Email Marketing */}
          <div className="flex flex-col md:flex-row w-full md:w-[45%] border-2 p-8 md:p-10 rounded-[45px] bg-[#F3F3F3]">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <span className="text-[24px] font-bold bg-[#B9FF66] pl-2 rounded-[7px] w-2/5">Email</span>
              <div>

              <span className="text-[24px] font-bold mt-2 mb-6 bg-[#B9FF66] pl-2 rounded-[7px] w-[80%] max-w-[300px]">Marketing</span>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-10 h-10 flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex justify-center items-center">
              <Image src="/letter.png" alt="Letter" fill className="object-contain rotate-90" priority />
            </div>
          </div>

          {/* CARD 5: Content Creation */}
          <div className="flex flex-col md:flex-row w-full md:w-[45%] border-2 p-8 md:p-10 rounded-[45px] bg-[#B9FF66]">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <p className="text-[24px] font-bold bg-[#F3F3F3] pl-2 rounded-[7px] w-4/5">Content</p>
              <span className="text-[24px] font-bold mt-2 mb-6 bg-[#F3F3F3] pl-2 rounded-[7px] w-[80%] max-w-[300px]">Creation</span>
              <div className="flex items-center gap-2 mt-8">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-10 h-10 flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex justify-center items-center">
              <Image src="/space.png" alt="Space" fill className="object-contain rotate-90" priority />
            </div>
          </div>

          {/* CARD 6: Analytics and Tracking */}
          <div className="flex flex-col md:flex-row w-full md:w-[45%] border-2 p-8 md:p-10 rounded-[45px] bg-[#191A23]">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <p className="text-[24px] font-bold bg-[#B9FF66] pl-2 rounded-[7px]">Analytics and</p>
              <span className="text-[24px] font-bold mt-2 mb-6 bg-[#B9FF66] pl-2 rounded-[7px] w-[70%] max-w-[300px]">Tracking</span>
              <div className="flex items-center gap-2 mt-8">
                <Link href="/Service" className="text-black hover:underline rounded-full bg-white w-10 h-10 flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[20px] leading-[28px] text-white">Learn more</span>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-48 md:h-auto flex justify-center items-center">
              <Image src="/diaqram.png" alt="Diagram" fill className="object-contain" priority />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
