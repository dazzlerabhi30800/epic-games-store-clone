import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import data from "./GamesGrid2Data";
// import * as Unicons from "@iconscout/react-unicons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import GamesGridItem from "./GamesGridItem";

const GamesGrid2 = ({ windowSize, handleDiscount, numberWithCommas }) => {
  const gameTop = data.filter((data) => data.category === "new");

  const gameMost = data.filter((data) => data.category === "top");

  const gameWishlist = data.filter((data) => data.category === "soon");
  return (
    <div className="games-grid--wrapper my-10">
      <Swiper
        spaceBetween={
          windowSize.size < 1200 ? (windowSize.size < 700 ? 10 : 30) : 60
        }
        slidesPerView={
          windowSize.size < 1200
            ? windowSize.size < 700
              ? windowSize.size < 500
                ? 1.1
                : 1.3
              : 1.5
            : 3
        }
        slidesPerGroup={windowSize.size < 1200 ? 1 : 3}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        className="grid--swiper py-16"
      >
        <SwiperSlide>
          <GamesGridItem
            handleDiscount={handleDiscount}
            numberWithCommas={numberWithCommas}
            gamesData={gameTop}
            heading="New Releases"
            id="game--top"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GamesGridItem
            handleDiscount={handleDiscount}
            numberWithCommas={numberWithCommas}
            gamesData={gameMost}
            heading="Top Player Rated"
            id="game--most"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GamesGridItem
            handleDiscount={handleDiscount}
            numberWithCommas={numberWithCommas}
            gamesData={gameWishlist}
            heading="Coming Soon"
            id="game--wishlist"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GamesGrid2;
