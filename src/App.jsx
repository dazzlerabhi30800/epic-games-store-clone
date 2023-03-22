import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import MobileCarousel from "./Components/MobileCarousel";
import SwiperTest from "./Components/SwiperTest";
import useResize from "./useResize";

function App() {
  const windowSize = useResize();
  console.log(windowSize);
  return (
    <div className="App">
      <Header />
      <main>
        {windowSize.size >= 1100 ? <HeroCarousel /> : <SwiperTest />}
        {/* <MobileCarousel /> */}
      </main>
    </div>
  );
}

export default App;
