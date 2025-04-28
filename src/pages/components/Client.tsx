import React from 'react'
import Image from 'next/image'
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Client({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] m-auto flex flex-wrap mb-[140px]'>
            <div className='w-[48%] border-[1px] rounded-[45px] p-12 border-b-4 mr-[54px] mt-4'>
            <h3 className=' font-bold text-[30px]'>Client Success First</h3>
            <hr className='my-8'/>
            <p className='text-[20px]'>We are dedicated to achieving measurable results  for our  clients.Each strategy  is tailored to meet unique bussiness goals  and  drive long-term success.</p>
            </div>
            <div className='w-[48%] border-[1px] rounded-[45px] p-12 border-b-4 mt-4 flex'>
                <div className='w-1/2'>
                <h3 className=' font-bold text-[30px]'>Innovation</h3>
            <hr className='my-8'/>
            <p className='text-[20px]'>We constantly strive to stay ahead of industry trends.</p>
                </div>
<div className='relative ml-8 w-[45%]'><Image src="/Lop.png" alt="Loop" fill/></div>
            </div>
            <div className='w-[48%] border-[1px] rounded-[45px] p-12 border-b-4 mr-[54px] mt-8 flex'>
                <div className='w-1/2'>            <h3 className=' font-bold text-[30px]'>Collaboration</h3>
            <hr className='my-8'/>
            <p className='text-[20px]'>We believe in the power of teamwork and partnership.</p></div>
            <div className='relative ml-8 w-[45%]'><Image src="/Tshiirt.png" alt="Loop" fill/></div>
            </div>
            <div className='w-[48%] border-[1px] rounded-[45px] p-12 border-b-4 mt-8'>
            <h3 className=' font-bold text-[30px]'>Transparency</h3>
            <hr className='my-8'/>
            <p className='text-[20px]'>Open and honest communication is key to our success.We keep our clients informed every step of the way to ensure trust and clarity.</p>
            </div>
        </div>
    </div>
  )
}

export default Client