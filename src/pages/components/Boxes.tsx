import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import CheckIcon from '@mui/icons-material/Check';
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Boxes({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] m-auto flex'>
            <div className='group border-[1px] w-[28%] m-auto my-2 p-8 border-b-6 rounded-[45px] text-black  hover:bg-[#191A23]  transition duration-300 ease-in-out hover:text-white'>
                <h6 className='text-4xl'>Basic Plan</h6>
                <div className='my-4'><span className='font-bold text-3xl'>$500 </span><span>/month</span></div>
                <button className='w-full rounded-[10px] py-3 bg-[#191A23] text-white hover:bg-[#B9FF66] transition duration-300 ease-in-out hover:text-[black] group-hover:bg-[#B9FF66]'>Get Started</button>
                <button className='w-full rounded-[10px] border-2 py-3 my-4.5 font-bold'>Request a quote</button>
                <hr className='my-6'/>
                <div className='mb-12'>
                    <div className='mb-4 flex items-center'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Website optimization</span></div>
                    <div className='mb-4 flex'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><div><span>Social media setup and</span><span> management (1 platform) </span></div></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Monthly progress report</span></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Email support</span></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Basic competitor analysis</span></div>
                    <div className='mb-14'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Initial SEO audit</span></div>
                </div>
            </div>
            <div className='group border-[1px] w-[28%] m-auto my-2 p-8 border-b-6 rounded-[45px] text-black  hover:bg-[#191A23]  transition duration-300 ease-in-out hover:text-white'>
                <h6 className='text-4xl'>Pro Plan</h6>
                <div className='my-4'><span className='font-bold text-3xl'>$1000 </span><span>/month</span></div>
                <button className='w-full rounded-[10px] py-3 bg-[#191A23] text-white hover:bg-[#B9FF66] transition duration-300 ease-in-out hover:text-[black] group-hover:bg-[#B9FF66]'>Get Started</button>
                <button className='w-full rounded-[10px] border-2 py-3 my-4.5 font-bold'>Request a quote</button>
                <hr className='my-6'/>
                <div className='mb-12'>
                    <div className='mb-4 flex items-center'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Includes all from the Basic Plan</span></div>
                    <div className='mb-4 flex'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><div><span>Social media setup and management</span><span> (up to 3 platforms) </span></div></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>PPC ad campaign management</span></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Email and phone support</span></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>On-page SEO improvements</span></div>
                    <div className='mb-14 flex'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><div><span>Monthly content recommendations</span></div></div>
                </div>
            </div>
            <div className='group border-[1px] w-[28%] m-auto my-2 p-8 border-b-6 rounded-[45px] text-black  hover:bg-[#191A23]  transition duration-300 ease-in-out hover:text-white'>
                <h6 className='text-4xl'>Elite Plan</h6>
                <div className='my-4'><span className='font-bold text-3xl'>$2000 </span><span>/month</span></div>
                <button className='w-full rounded-[10px] py-3 bg-[#191A23] text-white hover:bg-[#B9FF66] transition duration-300 ease-in-out hover:text-[black] group-hover:bg-[#B9FF66]'>Get Started</button>
                <button className='w-full rounded-[10px] border-2 py-3 my-4.5 font-bold'>Request a quote</button>
                <hr className='my-6'/>
                <div className='mb-12'>
                    <div className='mb-4 flex items-center'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Includes all from the Basic Plan</span></div>
                    <div className='mb-4 flex'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><div><span>Website design and</span><p>development </p></div></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Comprehensive SEO strategy</span></div>
                    <div className='mb-4 flex'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><div><span>Social media setup and management (up to 5 platforms)</span></div></div>
                    <div className='mb-4'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>Content marketing strategy and implementation</span></div>
                    <div className='mb-14'><CheckIcon className='rounded-[50%] p-0.5 bg-[#B9FF66] mr-4 text-black' fontSize='large'/><span>In-depth analytics and reporting</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Boxes