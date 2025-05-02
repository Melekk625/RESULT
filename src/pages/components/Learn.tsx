import React from 'react';
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {};

function Learn({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className="mb-[100px]">
        <div className="max-w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-wrap p-[30px] rounded-[45px] border-2 border-b-6 bg-[#F3F3F3]">
            <div className="w-full sm:w-1/3 mb-5 mr-4">
              <p className="text-[20px] sm:text-[24px] font-bold bg-white pl-1 rounded-[7px]">Search engine</p>
              <p className="text-[20px] sm:text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px]">optimization</p>
              <div className="flex items-center gap-2 mt-5">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[16px] sm:text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 flex justify-center items-center">
              <Image src="/search.png" alt="Search" width={210} height={166} priority />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-wrap p-[30px] rounded-[45px] border-2 border-b-6 bg-[#F3F3F3]">
            <div className="w-full sm:w-1/3 mb-5 mr-4">
              <p className="text-[20px] sm:text-[24px] font-bold bg-white pl-1 rounded-[7px]">Pay-per-click</p>
              <p className="text-[20px] sm:text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px]">advertising</p>
              <div className="flex items-center gap-2 mt-5">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[16px] sm:text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 flex justify-center items-center">
              <Image src="/arrow.png" alt="Arrow" width={210} height={147.62} priority />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-wrap p-[30px] rounded-[45px] border-2 border-b-6 bg-[#F3F3F3]">
            <div className="w-full sm:w-1/3 mb-5 mr-4">
              <p className="text-[20px] sm:text-[24px] font-bold bg-white pl-1 rounded-[7px]">Social Media</p>
              <p className="text-[20px] sm:text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px]">Marketing</p>
              <div className="flex items-center gap-2 mt-5">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[16px] sm:text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 flex justify-center items-center">
              <Image src="/smile.png" alt="Smile" width={210} height={166} priority />
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-wrap p-[30px] rounded-[45px] border-2 border-b-6 bg-[#F3F3F3]">
            <div className="w-full sm:w-1/3 mb-5 mr-4">
              <p className="text-[20px] sm:text-[24px] font-bold bg-white pl-1 rounded-[7px]">Email</p>
              <p className="text-[20px] sm:text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px]">Marketing</p>
              <div className="flex items-center gap-2 mt-5">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[16px] sm:text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 flex justify-center items-center">
              <Image src="/letter.png" alt="Letter" width={210} height={166} priority className="rotate-90" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-wrap p-[30px] rounded-[45px] border-2 border-b-6 bg-[#F3F3F3]">
            <div className="w-full sm:w-1/3 mb-5 mr-4">
              <p className="text-[20px] sm:text-[24px] font-bold bg-white pl-1 rounded-[7px]">Content</p>
              <p className="text-[20px] sm:text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px]">Creation</p>
              <div className="flex items-center gap-2 mt-5">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[16px] sm:text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 flex justify-center items-center">
              <Image src="/space.png" alt="Space" width={210} height={166} priority />
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-wrap p-[30px] rounded-[45px] border-2 border-b-6 bg-[#F3F3F3]">
            <div className="w-full sm:w-1/3 mb-5 mr-4">
              <p className="text-[20px] sm:text-[24px] font-bold bg-white pl-1 rounded-[7px]">Analytics and</p>
              <p className="text-[20px] sm:text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px]">Tracking</p>
              <div className="flex items-center gap-2 mt-5">
                <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                  <ArrowOutwardIcon fontSize="small" />
                </Link>
                <span className="font-normal text-[16px] sm:text-[20px] leading-[28px]">Learn more</span>
              </div>
            </div>
            <div className="w-full sm:w-2/3 flex justify-center items-center">
              <Image src="/diaqram.png" alt="Diaqram" width={210} height={166} priority />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
