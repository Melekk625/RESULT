import React from 'react';
import { Space_Grotesk } from 'next/font/google';

// Font konfiqurasiyası
const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
});

const Service: React.FC = () => {
  return (
    <div className={spaceGrotesk.className}>
      <div className="flex flex-wrap max-w-[90%] m-auto leading-[100%] items-center mt-[140px] mb-[85px] gap-5">
        {/* Başlıq qutusu */}
        <h2 className="w-[178px] h-[51px] bg-[#B9FF66] flex justify-center items-center font-medium text-[40px] rounded-[7px]">
          Services
        </h2>

        {/* Açıqlama mətn */}
        <p className="font-normal text-[18px] w-full md:w-[42%]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
    </div>
  );
};

export default Service;
