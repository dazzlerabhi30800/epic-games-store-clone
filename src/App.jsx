import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";
import Sale from "./Components/Sale";
import SwiperTest from "./Components/SwiperTest";
import useResize from "./useResize";

function App() {
  const windowSize = useResize();
  let mobileTrue = windowSize.size < 1000 ? true : false;

  return (
    <div className="App">
      <Header />
      <main>
        {windowSize.size >= 1100 ? <HeroCarousel /> : <SwiperTest />}
        <Sale windowSize={windowSize} />
      </main>
    </div>
  );
}

export default App;
