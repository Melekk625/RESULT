import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, History } from 'swiper/modules';
type Props = {}

function BlackSlider({}: Props) {
  return (
    <div className='max-w-[90%] m-auto mb-[140px]'>
          <Swiper className='bg-black  rounded-[45px]'
        spaceBetween={50}
        slidesPerView={2}
        navigation={true}
        pagination={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
      >
    <div><SwiperSlide data-history="1"><div className='pb-[138px] pt-[84px] pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1"><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1"><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1" ><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1" ><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1" ><div className=' pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1" ><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1" ><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide>
    <SwiperSlide data-history="1" ><div className='pb-[138px] pt-[84px]  pl-8'><div className='w-[606px] h-[266px] relative '><Image src="/Bubble.svg" alt="Boy" fill /></div><div className='ml-20'><p className='font-medium text-[#B9FF66] text-[20px]'>John Smith
    </p><p className='text-[18px] text-white'>Marketing Director at XYZ Corp</p></div></div></SwiperSlide></div> 
      </Swiper>
    </div>
  )
}

export default BlackSlider