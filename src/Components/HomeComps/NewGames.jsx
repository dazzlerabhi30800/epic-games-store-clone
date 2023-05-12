import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Unicons from "@iconscout/react-unicons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewGames = ({ windowSize }) => {
  return (
    <div className="p-4">
      <Swiper
        slidesPerGroup={windowSize.size < 1100 ? 1 : 2}
        slidesPerView={windowSize.size < 1100 ? 1 : 2}
        spaceBetween={15}
        centeredSlides={false}
        className="w-full"
      >
        <SwiperSlide>
          <div
            id="arrival-New"
            className="arrival--item w-full text-white text-left"
          >
            <div className="item--img">
              <img
                className="rounded-md"
                loading="lazy"
                src="./imgs/sale-imgs/smite.jpg"
                alt="smite"
              />
            </div>
            <div className="info">
              <h3 className="text-md">SMITE - New Season and Gems Sale</h3>
              <p className="text-sm text-gray-400 special--para">
                Explore a vibrant New Map, new Battle Pass, and in-game Gems
                sale.
              </p>
              <a
                onClick={(e) => e.preventDefault()}
                href="#"
                className="w-fit underline decoration-slate-300"
              >
                Play For Free
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="arrival-New"
            className="arrival--item w-full text-white text-left"
          >
            <div className="item--img">
              <img
                className="rounded-md"
                loading="lazy"
                src="./imgs/free-games/world-of-warships.jpg"
                alt="world-of-warships"
              />
            </div>
            <div className="info">
              <h3 className="text-md">World of Warships</h3>
              <p className="text-sm special--para text-gray-400">
                DLC giveaway and exclusive events to sink your teeth into
              </p>
              <a
                onClick={(e) => e.preventDefault()}
                href="#"
                className="w-fit underline decoration-slate-300"
              >
                Save Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewGames;
