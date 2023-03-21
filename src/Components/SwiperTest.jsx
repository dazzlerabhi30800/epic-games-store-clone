import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

const SwiperTest = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.5}
      centeredSlides={true}
      pagination={{ clickable: true }}
      loop={true}
      speed={300}
      // onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-2 pt-4 pb-8 slider"
    >
      <SwiperSlide className="slide h-4/5">Slide 1</SwiperSlide>
      <SwiperSlide className="slide h-4/5">Slide 2</SwiperSlide>
      <SwiperSlide className="slide h-4/5">Slide 3</SwiperSlide>
      <SwiperSlide className="slide h-4/5">Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperTest;
