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

import { Fade } from "react-awesome-reveal";

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
        <div className="hero h-[600px] bg-banner3">
          <div className="hero-overlay "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <Fade direction="left" delay={1000}>
                <h1 className="mb-5 text-5xl font-bold">
                  Gear Up for Excellence
                </h1>
              </Fade>
              <Fade direction="right" delay={1000}>
                <p className="mb-5">
                  Discover the ultimate collection of sports equipment to fuel
                  your passion and elevate your performance. From beginners to
                  pros, we’ve got everything you need to play, compete, and win.
                  Explore top-quality gear designed to push your limits and help
                  you achieve greatness in every game.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero h-[600px] bg-banner1">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Unleash Your Athletic Potential
              </h1>
              <p className="mb-5">
                Step into a world where top-tier sports equipment meets
                unmatched performance. Whether you're training for a new
                challenge or perfecting your skills, our gear is designed to
                support your journey. Let's make every moment count on and off
                the field!
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero h-[600px] bg-banner2">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Play Hard, Win Big</h1>
              <p className="mb-5">
                Equip yourself with the finest sports gear that champions trust.
                From innovative designs to durable materials, our collection
                ensures you're always game-ready. Your victory starts here—gear
                up and conquer!
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
