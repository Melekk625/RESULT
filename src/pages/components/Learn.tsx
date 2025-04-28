import React from 'react'
import Image from 'next/image';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Learn({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
    <div className='mb-[100px]'>
      <div className="max-w-[90%] m-auto flex flex-wrap">
        <div className="flex flex-wrap w-[45%] border-2 m-auto  p-[50px] rounded-[45px] border-b-6 mb-[40px] bg-[#F3F3F3]">
          <div className="w-1/3 mb-5 mr-4">
            <p className="text-[24px] font-bold bg-white pl-1 rounded-[7px]">Search engine</p>
            <p className="text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px] w-[90%]">optimization</p>
            <div className="flex items-center gap-2 mt-[93px]">
              <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                <ArrowOutwardIcon fontSize="small" />
              </Link>
              <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
            </div>
          </div>


          <div className="w-3/5 flex justify-center items-center">
            <Image
              src="/search.png"
              alt="Search"
              width={210}
              height={166}
              priority
            />
          </div>
        </div>


        <div className="flex flex-wrap w-[45%] border-2 m-auto  p-[50px] rounded-[45px] border-b-6 mb-[40px] bg-[#F3F3F3]">
          <div className="w-1/3 mb-5 mr-4">
            <p className="text-[24px] font-bold bg-white pl-1 rounded-[7px]">Pay-per-click</p>
            <p className="text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px] w-[90%]">advertising</p>
            <div className="flex items-center gap-2 mt-[93px]">
              <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                <ArrowOutwardIcon fontSize="small" />
              </Link>
              <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
            </div>
          </div>


          <div className="w-3/5 flex justify-center items-center">
            <Image
              src="/arrow.png"
              alt="Arrow"
              width={210}
              height={147.62}
              priority
            />
          </div>
        </div>
        <div className="flex flex-wrap w-[45%] border-2 m-auto  p-[50px] rounded-[45px] border-b-6 mb-[40px] bg-[#F3F3F3]">
          <div className="w-1/3 mb-5 mr-8">
            <p className="text-[24px] font-bold bg-white pl-1 rounded-[7px]">Social Media</p>
            <p className="text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px] w-[80%]">Marketing</p>
            <div className="flex items-center gap-2 mt-[93px]">
              <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                <ArrowOutwardIcon fontSize="small" />
              </Link>
              <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
            </div>
          </div>


          <div className="w-3/5 flex justify-center items-center">
            <Image
              src="/smile.png"
              alt="Smile"
              width={210}
              height={166}
              priority
            />
          </div>
        </div>
        <div className="flex flex-wrap w-[45%] border-2 m-auto  p-[50px] rounded-[45px] border-b-6 mb-[40px] bg-[#F3F3F3]">
          <div className="w-1/3 mb-5 mr-4">
            <p className="text-[24px] font-bold bg-white pl-1 rounded-[7px] w-2/5">Email</p>
            <p className="text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px] w-[80%]">Marketing</p>
            <div className="flex items-center gap-2 mt-[93px]">
              <Link href="/Service" className="text-[#B9FF66] hover:underline border-2 rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                <ArrowOutwardIcon fontSize="small" />
              </Link>
              <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
            </div>
          </div>


          <div className="w-3/5 flex justify-center items-center">
            <Image
              src="/letter.png"
              alt="Letter"
              width={210}
              height={166}
              priority
              className='rotate-90'
            />
          </div>
        </div>
        <div className="flex flex-wrap w-[45%] border-2 m-auto  p-[50px] rounded-[45px] mb-[40px] border-b-6 bg-[#F3F3F3]">
          <div className="w-2/5 mb-5 mr-4">
            <p className="text-[24px] font-bold bg-white pl-1 rounded-[7px] w-1/2">Content</p>
            <p className="text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px] w-1/2">Creation</p>
            <div className="flex items-center gap-2 mt-[93px]">
              <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                <ArrowOutwardIcon fontSize="small" />
              </Link>
              <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
            </div>
          </div>


          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/space.png"
              alt="Space"
              width={210}
              height={166}
              priority
            />
          </div>
        </div>
        <div className="flex flex-wrap w-[45%] border-2 m-auto  p-[50px] rounded-[45px] mb-[40px] border-b-6 bg-[#F3F3F3]">
          <div className="w-1/3 mb-5 mr-4">
            <p className="text-[24px] font-bold bg-white pl-1 rounded-[7px]">Analytics and </p>
            <p className="text-[24px] font-bold mb-4 bg-white pl-1 rounded-[7px] w-[70%]">Tracking</p>
            <div className="flex items-center gap-2 mt-[93px]">
              <Link href="/Service" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center">
                <ArrowOutwardIcon fontSize="small" />
              </Link>
              <span className="font-normal text-[20px] leading-[28px]">Learn more</span>
            </div>
          </div>


          <div className="w-3/5 flex justify-center items-center">
            <Image
              src="/diaqram.png"
              alt="Diaqram"
              width={210}
              height={166}
              priority
            />
          </div>
        </div>


      </div>
    </div>
    </div>
  )
}

export default Learn