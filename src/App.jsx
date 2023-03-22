import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import SwiperTest from "./Components/SwiperTest";
import useResize from "./useResize";

function App() {
  const windowSize = useResize();
  return (
    <div className="App">
      <Header />
      <main>{windowSize.size >= 1100 ? <HeroCarousel /> : <SwiperTest />}</main>
    </div>
  );
}

export default App;
