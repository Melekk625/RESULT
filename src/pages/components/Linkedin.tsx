import React from 'react'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
    weight: '400',
    subsets: ['latin'],
  });
type Props = {}

function Linkedin({ }: Props) {
    return (
        <>
        <div className={spaceGrotesk.className}>
            <div className='flex max-w-[90%] m-auto flex-wrap mb-[208px]'>
                <div className='w-[30%] border-[1px] border-b-4 rounded-[45px]  mx-4 p-8 mt-10'><div className='flex w-[100%] justify-between'><div className='w-[105.65px] relative h-[102.82px]'><Image src="/Picture.svg" alt="Boy" fill /></div><div className='flex items-end'><div><p className='font-medium text-[20px]'>John Smith</p><p className='text-[18px] font-normal'>CEO and Founder</p></div></div><div className='flex justify-end'><LinkedInIcon className='text-[#B9FF66] rounded-[50%] bg-black'/></div><hr className='my-[28px]'/></div>
                <hr className='my-[28px]'/>
                <div className='w-[100%]'>

                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                </div>
                </div>
                <div className='w-[30%] border-[1px] border-b-4 rounded-[45px] p-8 mx-4 mt-10'><div className='flex w-[100%] justify-between'><div className='w-[105.65px] relative h-[102.82px]'><Image src="/Picture1.svg" alt="Boy" fill /></div><div className='flex items-end'><div><p className='font-medium text-[20px]'>Jane Doe</p><p className='text-[18px] font-normal'>Director of Operations</p></div></div><div className='flex justify-end'><LinkedInIcon className='text-[#B9FF66] rounded-[50%] bg-black'/></div><hr className='my-[28px]'/></div>
                <hr className='my-[28px]'/>
                <div className='w-[100%]'>

                <p>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
                </div>
                </div>
                <div className='w-[30%] border-[1px] border-b-4 rounded-[45px] p-8  mx-4 mt-10'><div className='flex w-[100%] justify-between'><div className='w-[105.65px] relative h-[102.82px]'><Image src="/Picture2.svg" alt="Boy" fill /></div><div className='flex items-end'><div><p className='font-medium text-[20px]'>Michael Brown</p><p className='text-[18px] font-normal'>Senior SEO Specialist</p></div></div><div className='flex justify-end'><LinkedInIcon className='text-[#B9FF66] rounded-[50%] bg-black'/></div><hr className='my-[28px]'/></div>
                <hr className='my-[28px]'/>
                <div className='w-[100%]'>

                <p>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
                </div>
                </div>
                <div className='w-[30%] border-[1px] border-b-4 rounded-[45px] p-8  mx-4 mt-10'><div className='flex w-[100%] justify-between'><div className='w-[105.65px] relative h-[102.82px]'><Image src="/Mask.svg" alt="Boy" fill /></div><div className='flex items-end'><div><p className='font-medium text-[20px]'>Emily Johnson</p><p className='text-[18px] font-normal'>PPC Manager</p></div></div><div className='flex justify-end'><LinkedInIcon className='text-[#B9FF66] rounded-[50%] bg-black'/></div><hr className='my-[28px]'/></div>
                <hr className='my-[28px]'/>
                <div className='w-[100%]'>

                <p>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
                </div>
                </div>
                <div className='w-[30%] border-[1px] border-b-4 rounded-[45px] p-8  mx-4 mt-10'><div className='flex w-[100%] justify-between'><div className='w-[105.65px] relative h-[102.82px]'><Image src="/Picture5.svg" alt="Boy" fill /></div><div className='flex items-end'><div><p  className='font-medium text-[20px]'>Brian Williams</p><p className='text-[18px] font-normal'>Social Media</p> <p>Specialist</p></div></div><div className='flex justify-end'><LinkedInIcon className='text-[#B9FF66] rounded-[50%] bg-black'/></div><hr className='my-[28px]'/></div>
                <hr className='my-[28px]'/>
                <div className='w-[100%]'>

                <p>4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
                </div>
                </div>
                <div className='w-[30%] border-[1px] border-b-4 rounded-[45px] p-8 mx-4 mt-10'><div className='flex w-[100%] justify-between'><div className='w-[105.65px] relative h-[102.82px]'><Image src="/Picture6.svg" alt="Boy" fill /></div><div className='flex items-end'><div><p  className='font-medium text-[20px]'>Sarah Kim</p><p className='text-[18px] font-normal'>Content Creator</p></div></div><div className='flex justify-end'><LinkedInIcon className='text-[#B9FF66] rounded-[50%] bg-black'/></div><hr className='my-[28px]'/></div>
                <hr className='my-[28px]'/>
                <div className='w-[100%]'>

                <p>2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries</p>
                </div>
                </div>
                <div className='flex justify-end w-[90%] m-auto mt-10'><button className='py-5 px-9 bg-black text-white rounded-[14px] gap-2.5'>See all team</button></div>
            </div>
        </div>
        </>
    )
}

export default Linkedin