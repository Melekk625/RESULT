import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
type Props = {}

function Back({}: Props) {
  return (
    <div className='max-w-[90%] m-auto text-[#B9FF66] flex items-center mb-[65px]'>
        <div className='mr-2.5'>  <Link href="/about" className="text-[#B9FF66] hover:underline rounded-full bg-black w-[41px] h-[41px] flex items-center justify-center rotate-270 p-6">
                <ArrowOutwardIcon fontSize="large" />
              </Link></div><p className='text-black text-[20px]'>Back</p>
    </div>
  )
}

export default Back