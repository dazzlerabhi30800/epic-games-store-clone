import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/swiper-bundle.css";

const SwiperTest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleActive() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[activeIndex].classList.add("active");
    // console.log(activeIndex);
    // console.log(slides[activeIndex]);
  }
  useEffect(() => {
    handleActive();
  }, [activeIndex]);
  return (
    <div className="overflow-hidden swiper--container">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(index) => setActiveIndex(index.snapIndex)}
        // onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
        centeredSlides={true}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  py-12"
      >
        <SwiperSlide>
          <div className="slide one ">
            <div>fortnite</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide two">
            <div>sifu</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide three">
            <div>diablo 3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide four">
            <div>nfs unbound</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide five">
            <div>gta v</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide six">
            <div>witcher</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperTest;
