'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`w-full ${spaceGrotesk.className}`}>
      <div className="max-w-[90%] m-auto h-[68px] flex justify-between items-center">
        <div className="flex items-center justify-center">
          <div className="relative w-[20px] h-[20px]">
            <Image src="Black.svg" alt="White" fill />
          </div>
          <Link href="/#">
            <p className="text-[#000000] text-[20px] font-medium ml-1">Positivus</p>
          </Link>
        </div>
        <button
          className="sm:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
        <ul className="flex gap-10 items-center sm:flex hidden">
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
        <ul
          className={`sm:hidden absolute top-[68px] left-0 w-full bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <li>
            <Link href="/about" className="block py-2 px-4 hover:text-blue-600 transition">About us</Link>
          </li>
          <li>
            <Link href="/Service" className="block py-2 px-4 hover:text-blue-600 transition">Services</Link>
          </li>
          <li>
            <Link href="/Pricing" className="block py-2 px-4 hover:text-blue-600 transition">Pricing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
