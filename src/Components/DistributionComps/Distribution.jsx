import React from "react";
import Publish from "./Publish";
import "../Styles/style.css";
import Goals from "./Goals";
import Services from "./Services";
import Accordian from "./Accordian";

const Distribution = () => {
  return (
    <main className="distribution--wrapper flex flex-col gap-16  text-white my-3 px-4 py-10">
      <Publish />
      <Goals />
      <Services />
      <Accordian />
    </main>
  );
};

export default Distribution;
