import React from "react";
import "./App.css";
import ComingSoonGames from "./Components/ComingSoonGames";
import FreeGames from "./Components/FreeGames";
import GamesGrid1 from "./Components/GamesGrid1";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import Sale from "./Components/Sale";
import SwiperTest from "./Components/SwiperTest";
import useResize from "./useResize";

function App() {
  const windowSize = useResize();

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
          numberWithCommas={numberWithCommas}
          handleDiscount={handleDiscount}
          windowSize={windowSize}
        />
        <FreeGames />
        <ComingSoonGames />
        <GamesGrid1
          numberWithCommas={numberWithCommas}
          handleDiscount={handleDiscount}
          windowSize={windowSize}
        />
      </main>
    </div>
  );
}

export default App;
