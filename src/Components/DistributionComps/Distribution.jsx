import React from "react";
import Publish from "./Publish";
import "../Styles/style.css";
import Goals from "./Goals";

const Distribution = () => {
  return (
    <main className="distribution--wrapper flex flex-col gap-16 text-white my-3 px-4 py-10">
      <Publish />
      <Goals />
    </main>
  );
};

export default Distribution;
