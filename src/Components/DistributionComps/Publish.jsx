import React from "react";

const Publish = () => {
  return (
    <div className="publish--container flex justify-between">
      <div className="publish--img flex items-center basis-1/2">
        <img
          className="w-4/5"
          src="./imgs/distribution-imgs/epic-games-publishing.webp"
          alt="epic-games-publishing"
        />
      </div>
      <div className="publish--text basis-1/2 font-poppins flex p-4 flex-col text-center items-center justify-around">
        <img
          src="./epic-games-full-logo.svg"
          alt="epic-games"
          className="w-44 h-44"
        />
        <h1 className="my-0 font-bebas text-5xl">
          Now Open to all developers and publishers
        </h1>
        <a onClick={(e) => e.preventDefault()} href="#">
          <button className="py-3 px-12 rounded-lg text-md bg-white text-black ease-in duration-300 hover:bg-gray-200">
            Sign In
          </button>
        </a>
        <span className="text-sm font-medium">
          Start distributing PC games on the Epic Games Store with out new
          self-service publishing tools.
        </span>
      </div>
    </div>
  );
};

export default Publish;
