import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, History } from 'swiper/modules';

type Props = {};

const testimonials = Array(9).fill({
  name: 'John Smith',
  role: 'Marketing Director at XYZ Corp',
  image: '/Bubble.svg',
});

function BlackSlider({}: Props) {
  return (
    <div className='max-w-[90%] m-auto mb-[140px]'>
      <Swiper
        className='bg-black rounded-[45px] px-4'
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        history={{ key: 'slide' }}
        modules={[Navigation, Pagination, History]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} data-history={`${index + 1}`}>
            <div className='py-[84px] px-4 md:px-8 flex flex-col items-center md:items-start'>
              <div className='relative w-full max-w-[600px] h-[200px] md:h-[266px]'>
                <Image src={item.image} alt="Testimonial Bubble" fill />
              </div>
              <div className='mt-6 md:ml-20 text-center md:text-left'>
                <p className='font-medium text-[#B9FF66] text-[18px] md:text-[20px]'>{item.name}</p>
                <p className='text-[16px] md:text-[18px] text-white'>{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BlackSlider;
