import React from 'react'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Engine({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] m-auto flex p-12 rounded-[45px] bg-black text-white mb-[140px]'>
            <div className='flex justify-start w-1/5'><div className='w-[30px] h-[30px] relative'><Image src="/White.svg" fill alt="White"/></div></div>
            <div className='text-black w-2/5'><div><span className='bg-[#B9FF66] p-2 rounded-[7px] text-[24px] font-bold'>Search Engine</span>
            <div className='mt-[9px]'><span className='bg-[#B9FF66] p-1.5 rounded-[7px] text-[24px] font-bold'>optimization</span></div></div></div>
            <div className='w-[100%]'><div className='text-[20px]  mb-22'>SEO is the process of improving your website's visibility on search engines like Google.By optimizing your content and site structure,we help your business rank higher in search results,driving more organic traffic and potential customers.</div>
            <button className='text-center w-full border-2 rounded-[14px] py-5 bg-white text-black text-[20px]'>Boost My Rankings</button></div>
        </div>
    </div>
  )
}

export default Engine