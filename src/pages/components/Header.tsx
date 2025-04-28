'use client'; // əgər client componentdirsə (məsələn: MUI və ya interaktiv elementlər istifadə olunur)

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

// Google font inteqrasiyası
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const Header: React.FC = () => {
  return (
    <div className={`w-full ${spaceGrotesk.className}`}>
      <div className="max-w-[90%] m-auto h-[68px] flex justify-between items-center">
        {/* Logo hissəsi */}
        <div className="flex items-center justify-center">
         <div className='relative w-[20px] h-[20px]'><Image src="Black.svg" alt="White" fill/></div>
         <Link href="/#"><p className="text-[#000000] text-[20px] font-medium ml-1">Positivus</p></Link> 
        </div>

        {/* Naviqasiya menyusu */}
        <ul className="flex gap-10 items-center">
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">About us</Link>
          </li>
          <li>
            <Link href="/Service" className="hover:text-blue-600 transition">Services</Link>
          </li>
          <li>
            <Link href="/Pricing" className="hover:text-blue-600 transition">Pricing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;