import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/slider3.png";
import slider2 from "../assets/slider2.png";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="h-[600px]  ">
          <img className="w-full  " src={slider2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[600px]  ">
          <img className="w-full " src={slider2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[600px]  ">
          <img className="w-full " src={slider2} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
