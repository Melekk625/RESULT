import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

const Service: React.FC = () => {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex flex-wrap max-w-[90%] m-auto leading-[100%] items-center mt-[140px] mb-[85px] gap-5">
        <Link href="/Service">
  <h2 className="w-[178px] h-[51px] my-4 mx-auto sm:mx-0 bg-[#B9FF66] flex justify-center items-center font-medium text-[40px] rounded-[7px]">
    Services
  </h2>
</Link>
        <p className="font-normal text-[18px] w-full md:w-[42%] text-center sm:text-left">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
    </div>
  );
};

export default Service;

