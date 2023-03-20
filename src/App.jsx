import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroCarousel from "./Components/HeroCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroCarousel />
      </main>
    </div>
  );
}

export default App;
