import React from "react";
import ComingSoonGames from "./ComingSoonGames";
import FreeGames from "./FreeGames";
import GamesGrid1 from "./GamesGrid1";
import GamesGrid2 from "./GamesGrid2";
import HeroCarousel from "./HeroCarousel";
import Sale from "./Sale";
import SwiperTest from "./SwiperTest";
import data from "./SalesData";
import salesData from "./SalesData2";
import useResize from "../../useResize";
import NewGames from "./NewGames";
import Category from "./Category";

const MainHome = ({ handleDiscount, numberWithCommas }) => {
  const windowSize = useResize();
  const saleData = data;
  const saleData2 = salesData;
  return (
    <main className="font-poppins">
      {windowSize.size >= 1100 ? <HeroCarousel /> : <SwiperTest />}
      <Sale
        data={saleData}
        numberWithCommas={numberWithCommas}
        handleDiscount={handleDiscount}
        windowSize={windowSize}
        uppercase={true}
      />
      <FreeGames />
      <ComingSoonGames />
      <GamesGrid1
        numberWithCommas={numberWithCommas}
        handleDiscount={handleDiscount}
        windowSize={windowSize}
      />
      <Sale
        data={saleData2}
        numberWithCommas={numberWithCommas}
        handleDiscount={handleDiscount}
        windowSize={windowSize}
        uppercase={false}
      />

      <GamesGrid2
        numberWithCommas={numberWithCommas}
        handleDiscount={handleDiscount}
        windowSize={windowSize}
      />
      <NewGames windowSize={windowSize} />
      <Category />
    </main>
  );
};

export default MainHome;
