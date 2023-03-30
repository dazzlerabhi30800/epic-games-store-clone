import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/HomeComps/Footer";
import MainHome from "./Components/HomeComps/MainHome";

function App() {
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
      <MainHome
        numberWithCommas={numberWithCommas}
        handleDiscount={handleDiscount}
      />
      <Footer />
    </div>
  );
}

export default App;
