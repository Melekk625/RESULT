"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Swiper style-ları
import "swiper/css";
import "swiper/css/pagination";

const Slider: React.FC = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[
          "amazon.svg",
          "drible.svg",
          "diffucult.svg",
          "Notion.svg",
          "Netflix.svg",
          "Zoom.svg",
          "amazon.svg",
          "drible.svg",
          "diffucult.svg",
        ].map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-start py-2.5 mb-7">
              <Image
                src={`/${logo}`}
                width={124.11}
                height={48}
                alt={logo.split(".")[0]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
