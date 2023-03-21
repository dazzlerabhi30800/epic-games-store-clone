import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import MobileCarousel from "./Components/MobileCarousel";
import SwiperTest from "./Components/SwiperTest";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <HeroCarousel /> */}
        {/* <MobileCarousel /> */}
        <SwiperTest />
      </main>
    </div>
  );
}

export default App;
