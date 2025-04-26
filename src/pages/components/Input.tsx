import React from 'react'
import Image from 'next/image'
type Props = {}

function Input({}: Props) {
  return (
    <div>
        <div className='flex max-w-[90%] m-auto bg-[#F3F3F3] py-[60px] px-[100px] rounded-[45px] mb-[140px]'>
            <div className='w-1/2'>
                <div className='flex mb-10'><div className='pr-9'><input type="radio" className='mr-4'/>Say Hi</div><div><input type="radio" className='mr-4 bg-'/>Get a Quote</div></div>
                <p className='py-1'>Name</p>
                <input type="text" placeholder='Name' required className='w-full border-[1px] py-[18px] px-[30px] rounded-[14px] mb-[25px] bg-white'/>
                <p className='py-1'>Email*</p>
                <input type="text" placeholder='Email' required className='w-full border-[1px] py-[18px] px-[30px] rounded-[14px] mb-[25px] bg-white'/>
                <p className='py-1'>Message*</p>
                <textarea name="text" id="" placeholder='Message' className='w-full border-[1px] py-[18px] px-[30px] rounded-[14px] mb-[25px] bg-white'></textarea>
                <div className='w-full border-2 bg-black text-white text-center py-5 px-[35px] rounded-[14px]'><button>Send Message</button></div>
            </div>
            <div className='w-[690px] relative  '>
<Image src="/Sun.svg" alt="Boy" fill/>
            </div>
        </div>
    </div>
  )
}

export default Input