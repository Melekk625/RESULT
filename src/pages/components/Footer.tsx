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
      <div className='max-w-[90%] m-auto px-6 md:px-[60px] py-10 md:py-[55px] bg-black text-white min-h-full rounded-t-[30px] md:rounded-t-[45px]'>
        
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='relative w-7 h-7 mr-3'>
              <Image src="/White.svg" alt="Boy" fill />
            </div>
            <Link href="/#">
              <p className='text-2xl md:text-[30px]'>Positivus</p>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className='flex flex-wrap gap-4 md:gap-10 text-sm md:text-base'>
            <li><Link href="/about" className="hover:text-blue-600 transition underline">About us</Link></li>
            <li><Link href="/Service" className="hover:text-blue-600 transition underline">Services</Link></li>
            <li><Link href="/Pricing" className="hover:text-blue-600 transition underline">Pricing</Link></li>
          </ul>

          {/* Social Icons */}
          <div className='flex gap-3'>
            <LinkedInIcon className='border-2 rounded-full bg-white text-black p-1' />
            <FacebookIcon className='border-2 rounded-full bg-white text-black p-1' />
            <TwitterIcon className='border-2 rounded-full bg-white text-black p-1' />
          </div>
        </div>

        {/* Contact + Subscribe */}
        <div className='flex flex-col lg:flex-row justify-between items-start mt-10 gap-10'>
          {/* Contact Info */}
          <div className='w-full lg:w-1/2'>
            <span className='bg-[#B9FF66] text-black rounded-[7px] px-2 py-1 inline-block'>Contact us:</span>
            <p className='mt-4 mb-2'>Email: info@positivus.com</p>
            <p className='mb-2'>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>

          {/* Subscribe Box */}
          <div className='w-full lg:w-1/2 bg-[#292A32] px-6 py-8 rounded-[14px]'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
              <input
                className='py-3 px-5 border w-full sm:w-1/2 rounded-[14px] text-black'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className='py-3 px-5 w-full sm:w-1/2 rounded-[14px] bg-[#B9FF66] text-black'
                onClick={handleSubscribe}
              >
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className='mt-10 border-gray-600' />
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-6 text-sm'>
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <span className='underline mt-2 md:mt-0'>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
