import React from "react";
import "./App.css";
import FreeGames from "./Components/FreeGames";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import Sale from "./Components/Sale";
import SwiperTest from "./Components/SwiperTest";
import useResize from "./useResize";

function App() {
  const windowSize = useResize();

  return (
    <div className="App">
      <Header />
      <main className="font-poppins">
        {windowSize.size >= 1100 ? <HeroCarousel /> : <SwiperTest />}
        <Sale windowSize={windowSize} />
        <FreeGames />
      </main>
    </div>
  );
}

export default App;
