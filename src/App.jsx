import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/HomeComps/Footer";
import MainHome from "./Components/HomeComps/MainHome";
import Distribution from "./Components/Distribution";
import Support from "./Components/Support";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  console.log("new commit in Arco Linux D");
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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainHome
                numberWithCommas={numberWithCommas}
                handleDiscount={handleDiscount}
              />
            }
          />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
