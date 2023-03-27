import React, { useState, useRef } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Unicons from "@iconscout/react-unicons";
import SaleItem from "./SaleItem";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SaleNewArrival from "./SaleNewArrival";

const Sale = ({
  uppercase,
  data,
  windowSize,
  numberWithCommas,
  handleDiscount,
}) => {
  const swiperRef = useRef();
  const [end, setEnd] = useState(false);
  const [beginning, setBeginning] = useState(true);

  return (
    <div className="sale--wrapper flex flex-col my-10 gap-20 p-3 font-poppins">
      <div className="navigation--header flex justify-between items-center">
        <a href="#" className="decoration-none text-lg text-white">
          <h1>Games on Sale </h1>
        </a>
        <div className="navigation--btns text-white flex gap-3 hidden md:flex">
          <button
            disabled={beginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className={`btn ${
              beginning ? "opacity-50" : ""
            } left bg-zinc-700 p-1 rounded-2xl select-none`}
          >
            <Unicons.UilAngleLeft />
          </button>
          <button
            disabled={end}
            onClick={() => swiperRef.current?.slideNext()}
            className={`btn ${
              end ? "opacity-50" : ""
            } right bg-zinc-700 p-1 rounded-2xl`}
          >
            <Unicons.UilAngleRight />
          </button>
        </div>
      </div>
      <div className="sale--container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={windowSize.size < 1300 ? 45 : 30}
          slidesPerView={
            windowSize.size >= 1000 ? (windowSize.size < 1300 ? 4 : 5) : 1
          }
          slidesPerGroup={
            windowSize.size >= 1000 ? (windowSize.size < 1300 ? 4 : 5) : 1
          }
          onSlideChange={(swiper) => {
            setEnd(swiper.isEnd);
            setBeginning(swiper.isBeginning);
          }}
          loop={false}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <SaleItem
                  handleDiscount={handleDiscount}
                  numberWithCommas={numberWithCommas}
                  data={data}
                  uppercase={uppercase}
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <SaleItem />
          </SwiperSlide> */}
        </Swiper>
      </div>
      {uppercase && <SaleNewArrival windowSize={windowSize} />}
    </div>
  );
};

export default Sale;
