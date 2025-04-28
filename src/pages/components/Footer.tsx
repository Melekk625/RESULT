import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LinkedInIcon = dynamic(() => import('@mui/icons-material/LinkedIn'), { ssr: false });
const FacebookIcon = dynamic(() => import('@mui/icons-material/Facebook'), { ssr: false });
const TwitterIcon = dynamic(() => import('@mui/icons-material/Twitter'), { ssr: false });

type Props = {}

function Footer({}: Props) {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <div>
      <div className='max-w-[90%] m-auto px-[60px] py-[55px] bg-black text-white min-h-full rounded-t-[45px]'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center'>
            <div className='relative w-[28.9px] h-[28.4px] mr-[11px]'>
              <Image src="/White.svg" alt="Boy" fill />
            </div>
            <Link href="/#"><p className='text-[30px]'>Positivus</p></Link>
          </div>

          <ul className='flex gap-10'>
            <li><Link href="/about" className="hover:text-blue-600 transition underline">About us</Link></li>
            <li><Link href="/Service" className="hover:text-blue-600 transition underline">Services</Link></li>
            <li><Link href="/Pricing" className="hover:text-blue-600 transition underline">Pricing</Link></li>
          </ul>

          <div>
            <LinkedInIcon className='border-2 rounded-[50%] bg-white text-black mr-5'/>
            <FacebookIcon className='border-2 rounded-[50%] bg-white text-black mr-5'/>
            <TwitterIcon className='border-2 rounded-[50%] bg-white text-black mr-5'/>
          </div>
        </div>

        <div className='flex justify-between items-center mt-[66px]'>
          <div className='w-1/2'>
            <span className='bg-[#B9FF66] text-black rounded-[7px] gap-2.5 px-[7px]'>Contact us:</span>
            <p className='mt-[27px] mb-[20px]'>Email: info@positivus.com</p>
            <p className='mb-5'>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>

          <div className='w-1/2 bg-[#292A32] px-[40px] py-[59px] rounded-[14px]'>
            <div className='flex justify-center items-center'>
              <input
                className='py-[22px] px-[35px] border-[1px] w-[48%] mr-[10px] rounded-[14px] text-left'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className='py-[22px] px-[35px] w-[48%] ml-[10px] rounded-[14px] bg-[#B9FF66] text-black'
                onClick={handleSubscribe}
              >
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        <hr className='mt-[50px]' />
        <div className='min-h-full items-center'>
          <div className='flex min-h-full mt-[50px]'>
            <span className='mr-10'>© 2023 Positivus. All Rights Reserved.</span>
            <span className='underline'>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
