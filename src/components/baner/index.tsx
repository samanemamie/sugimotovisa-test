"use client";
import Image from "next/image";

//
import sliderImg_1 from "../../assets/images/slider/sliderImg_1.jpg";
import sliderImg_2 from "../../assets/images/slider/sliderImg_2.jpg";
import sliderImg_3 from "../../assets/images/slider/sliderImg_3.jpg";

//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image priority src={sliderImg_1} alt="sliderImg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg_2} alt="sliderImg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg_3} alt="sliderImg" />
        </SwiperSlide>
      </Swiper>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
