import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Unicons from "@iconscout/react-unicons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SaleNewArrival = ({ windowSize }) => {
  return (
    <div className="sale--arrival--wrapper">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: false }}
        spaceBetween={windowSize.size < 1200 ? 25 : 35}
        slidesPerView={windowSize.size < 1200 ? 1.2 : 3}
        className="sale--swiper pb-10 h-full"
      >
        <SwiperSlide>
          <div className="arrival--item text-white text-left">
            <div className="item--img">
              <img
                className="rounded-md"
                src="./imgs/sale-imgs/watch-dogs-2.jpg"
                alt="watch-dogs-2"
              />
              <div className="pin--btn">
                <Unicons.UilPlus className="plus--sign" />
              </div>
            </div>
            <div className="info">
              <h3 className="text-md">Watch Dogs 2</h3>
              <p className="text-sm text-gray-400">
                Watch Dogs 2 is a 2016 action-adventure game developed by
                Ubisoft and it is the sequel to 2014's Watch Dogs.
              </p>
              <a href="#" className="w-fit">
                Wishlist Now
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="arrival--item  text-white text-left">
            <div className="item--img">
              <img
                className="rounded-md"
                src="./imgs/sale-imgs/overwatch.jpg"
                alt="overwatch"
              />
              <div className="pin--btn">
                <Unicons.UilPlus className="plus--sign" />
              </div>
            </div>
            <div className="info">
              <h3 className="text-md">Overwatch</h3>
              <p className="text-sm text-gray-400">
                While your stature may be short, exploring this frontier is no
                small task.
              </p>
              <span>&#8377;1,999</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="arrival--item text-white text-left">
            <div className="item--img">
              <img
                className="rounded-md"
                src="./imgs/sale-imgs/plaion.jpg"
                alt="plaion"
              />
            </div>
            <div className="info">
              <h3 className="text-md">Plaion Publisher Sale - Up to 85% off</h3>
              <p className="text-sm text-gray-400">
                Deep Silver, Prime Matter and Ravenscourt have teamed up to
                bring you one of the biggest sales of the season.
              </p>
              <a href="#" className="w-fit">
                Save Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SaleNewArrival;
