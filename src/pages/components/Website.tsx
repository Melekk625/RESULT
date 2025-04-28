import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Website({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] m-auto mb-[140px]'>
            <div className='rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10'>
                <div className='relative w-[20%] h-[180px]'>
                    <Image src="Black.svg" alt="Black" fill/>
                    <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-8xl text-[#B9FF66]'>01</span>
                </div>
                <div className='w-[80%] p-4'>
                    <h4 className='text-[45px] py-4'>Website Audit & Analysis</h4>
                    <p className='text-[20px]'>We begin By conducting a compherensive audit to identity areas for improvement,including technical issues,content quality, and keyword opportunities.</p>
                </div>
            </div>
            <div className='rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10'>
                <div className='relative w-[20%] h-[180px]'>
                    <Image src="Black.svg" alt="Black" fill/>
                    <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-8xl text-[#B9FF66]'>02</span>
                </div>
                <div className='w-[80%] p-4'>
                    <h4 className='text-[45px] py-4'>Keyword Research & Strategy</h4>
                    <p className='text-[20px]'>Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.</p>
                </div>
            </div>
            <div className='rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10'>
                <div className='relative w-[20%] h-[180px]'>
                    <Image src="Black.svg" alt="Black" fill/>
                    <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-8xl text-[#B9FF66]'>03</span>
                </div>
                <div className='w-[80%] p-4'>
                    <h4 className='text-[45px] py-4'>On-Page Optimization </h4>
                    <p className='text-[20px]'>We optimize your website's structure,meta tags,and content to make it search engine-friendly,improving your visibility and relevance.</p>
                </div>
            </div>
            <div className='rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10'>
                <div className='relative w-[20%] h-[180px]'>
                    <Image src="Black.svg" alt="Black" fill/>
                    <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-8xl text-[#B9FF66]'>04</span>
                </div>
                <div className='w-[80%] p-4'>
                    <h4 className='text-[45px] py-4'>Content Creation & Optimization</h4>
                    <p className='text-[20px]'>High quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.</p>
                </div>
            </div>
            <div className='rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10'>
                <div className='relative w-[20%] h-[180px]'>
                    <Image src="Black.svg" alt="Black" fill/>
                    <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-8xl text-[#B9FF66]'>05</span>
                </div>
                <div className='w-[80%] p-4'>
                    <h4 className='text-[45px] py-4'>Link Building</h4>
                    <p className='text-[20px]'>We develop a link-building strategy to acquire authoritative,relevant backlinks that boost your domain authority and search rankings.</p>
                </div>
            </div>
            <div className='rounded-[45px] flex items-center p-8 bg-[#F3F3F3] mt-10'>
                <div className='relative w-[20%] h-[180px]'>
                    <Image src="Black.svg" alt="Black" fill/>
                    <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform text-8xl text-[#B9FF66]'>06</span>
                </div>
                <div className='w-[80%] p-4'>
                    <h4 className='text-[45px] py-4'>Monitoring & Reporting</h4>
                    <p className='text-[20px]'>We continuously monitor performance,track rankings,and provide detailed reports, making data-driven adjustments to maintain and improve your results.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Website