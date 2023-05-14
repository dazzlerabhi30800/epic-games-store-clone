import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/HomeComps/Footer";
import MainHome from "./Components/HomeComps/MainHome";
import Distribution from "./Components/DistributionComps/Distribution";
import Support from "./Components/SupportComps/Support";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

function App() {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);

  const handleDiscount = (price, discount) => {
    if (price && discount) {
      let discountPrice = (price * discount) / 100;
      return price - discountPrice;
    } else {
      return;
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" && !redirect) {
      setRedirect(true);
    } else {
      setRedirect(false);
    }
    setTimeout(() => {
      setRedirect(false);
    }, 200);
  }, []);

  return (
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
        <Route
          path="/distribution"
          element={redirect ? <Navigate to="/" /> : <Distribution />}
        />
        <Route
          path="/support"
          element={redirect ? <Navigate to="/" /> : <Support />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
