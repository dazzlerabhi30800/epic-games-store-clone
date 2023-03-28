import React from "react";
import "./App.css";
import ComingSoonGames from "./Components/ComingSoonGames";
import FreeGames from "./Components/FreeGames";
import GamesGrid1 from "./Components/GamesGrid1";
import GamesGrid2 from "./Components/GamesGrid2";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import Sale from "./Components/Sale";
import SwiperTest from "./Components/SwiperTest";
import useResize from "./useResize";
import data from "./Components/SalesData";
import salesData from "./Components/SalesData2";

function App() {
  const windowSize = useResize();
  const saleData = data;
  const saleData2 = salesData;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleDiscount = (price, discount) => {
    if (price && discount) {
      let discountPrice = (price * discount) / 100;
      return price - discountPrice;
    } else {
      return;
    }
  };
  return (
    <div className="App">
      <Header />
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
      </main>
    </div>
  );
}

export default App;
