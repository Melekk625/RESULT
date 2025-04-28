import React from 'react'
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});
type Props = {}

function PricingWrite({}: Props) {
  return (
    <div className={spaceGrotesk.className}>
      <div className='max-w-[90%] m-auto my-[85px]'>
        <h4 className='text-6xl font-bold my-4'>Pricing</h4>
        <p className='text-[20px] font-normal'>Eleveta Your Online Presence:Competitive Pricing</p>
        <p className='text-[20px] font-normal'>for Exceptional Results</p>
      </div>
    </div>
  )
}

export default PricingWrite