import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

type Props = {}

export default function Let({ }: Props) {
    return (
        <div className={spaceGrotesk.className}>
            <div className='max-w-[90%] m-auto flex bg-[#F3F3F3] rounded-[45px] mb-36'>
                {/* Content Section */}
                <div className='leading-[100%] px-[60px] w-full py-[60px] text-left'>
                    <h4 className='font-medium mb-[26px] mt-[60px] text-[24px] sm:text-[30px]'>Let’s make things happen</h4>
                    <p className='text-[18px] mb-[26px]'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <button className='py-[20px] px-[35px] w-full md:w-auto rounded-[14px] bg-black text-white'>
                        Get your free proposal
                    </button>
                </div>
                
                {/* Image Section */}
                <div className='w-[359px] h-[394px] relative -top-[8%] hidden md:block'>
                    <Image
                        src="/star.svg"
                        alt="Star"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}
