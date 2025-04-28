import React from 'react'
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image'
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function Join({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
        <div className='max-w-[90%] rounded-[45px] border-2 m-auto bg-[#B9FF66] p-12 flex border-b-8 mb-[140px]'>
            <div className='w-1/2 mr-8 flex justify-center items-center'>
                <div>

            <h2 className='font-bold text-[30px]'>Join Our Team</h2>
            <p className='text-[20px] my-6'>At Positivus, we thrive on innovation and collaboration. We're always looking for passionate individuals to join our team and help bussinesses grow.Ready to make an impavct ?</p>
            <button className='bg-black text-white rounded-[7px] py-4 px-10'>Explore Careers</button>
                </div>
            </div>
            <div className='w-2/5 h-[400px] relative'><Image src="/FM.png" alt="Women and Men" fill/></div>
        </div>
    </div>
  )
}

export default Join