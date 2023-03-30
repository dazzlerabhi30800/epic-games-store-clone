import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MobileCarousel = () => {
  return (
    <div className="mobile--carousel flex flex-col gap-3  p-6 items-center">
      {/* <div className="carousel--wrapper  bg-blue-300"> */}
      <Swiper
        spaceBetween={15}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1.5}
        speed={50}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper bg-teal-500"
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slide">
          <div className="carousel--item first">
            <span>coming soon</span>
            <p className="description">
              Unreal Editor for Fortnite (UEFN) brings the power of Unreal
              Engine to the scale of the Fortnite audience.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="carousel--item second">
            <span>coming soon</span>
            <p className="description">
              Unreal Editor for Fortnite (UEFN) brings the power of Unreal
              Engine to the scale of the Fortnite audience.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="carousel--item third">
            <span>coming soon</span>
            <p className="description">
              Unreal Editor for Fortnite (UEFN) brings the power of Unreal
              Engine to the scale of the Fortnite audience.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="carousel--item fourth">
            <span>coming soon</span>
            <p className="description">
              Unreal Editor for Fortnite (UEFN) brings the power of Unreal
              Engine to the scale of the Fortnite audience.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
      <div className="dots--wrapper">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default MobileCarousel;
