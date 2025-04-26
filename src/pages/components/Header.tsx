'use client'; // əgər client componentdirsə (məsələn: MUI və ya interaktiv elementlər istifadə olunur)

import React from 'react';
import HexagonIcon from '@mui/icons-material/Hexagon';
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
          <HexagonIcon />
          <p className="text-[#000000] text-[20px] font-medium ml-1">Positivus</p>
        </div>

        {/* Naviqasiya menyusu */}
        <ul className="flex gap-10 items-center">
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">About us</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          </li>
          <li>
            <Link href="/use-cases" className="hover:text-blue-600 transition">Use Cases</Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          </li>
          <li>
            <Link href="/quote">
              <button className="border-[1px] py-[10px] px-[20px] rounded-[14px] hover:bg-black hover:text-white transition">
                Request a quote
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;