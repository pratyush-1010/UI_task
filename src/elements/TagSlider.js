import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';


// import './styles.css';

// import required modules
import {Autoplay} from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        // slidesPerView={12}
        // spaceBetween={30}
        autoplay={true}
        breakpoints={{
            320:{
                slidesPerView: 4,
                spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 12,
              spaceBetween: 50,
            },
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="slidee">World</SwiperSlide>
        <SwiperSlide className="slidee">US</SwiperSlide>
        <SwiperSlide className="slidee">Technology</SwiperSlide>
        <SwiperSlide className="slidee">Design</SwiperSlide>
        <SwiperSlide className="slidee">Culture</SwiperSlide>
        <SwiperSlide className="slidee">Business</SwiperSlide>
        <SwiperSlide className="slidee">Politics</SwiperSlide>
        <SwiperSlide className="slidee">Opinion</SwiperSlide>
        <SwiperSlide className="slidee">Science</SwiperSlide>
        <SwiperSlide className="slidee">Health</SwiperSlide>
        <SwiperSlide className="slidee">Style</SwiperSlide>
        <SwiperSlide className="slidee">Travel</SwiperSlide>

      </Swiper>
    </>
  );
}
