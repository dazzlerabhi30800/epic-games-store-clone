import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import data from "./FreeGamesData";

const FreeGames = () => {
  return (
    <div className="free--games--wrapper flex flex-col gap-6 p-4 font-poppins text-white bg-zinc-800">
      <div className="free--games--header flex justify-between items-center">
        <h4 className="flex gap-1 items-center text-lg">
          <Unicons.UilGift className="w-12 h-12" />
          <span className="font-medium">Free Games</span>
        </h4>
        <a
          onClick={(e) => e.preventDefault()}
          href="#"
          className="border-solid border-2 rounded border-gray-200 py-1 px-4 ease-in-out bg-transparent duration-300 hover:bg-gray-600"
        >
          View More
        </a>
      </div>
      <div className="free--games--container flex gap-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="free--game__item flex flex-col w-full gap-3"
            >
              <div className="img--wrapper flex flex-col">
                <img loading="lazy" src={item.image} alt={item.name} />
                <span className={item.available ? "bg-sky-500" : "bg-black"}>
                  {item.available ? "free now" : "coming soon"}
                </span>
              </div>
              <div className="game--info flex flex-col gap-2 p-2">
                <h5>
                  {item.name.length >= 15
                    ? item.name.substring(0, 25) + "..."
                    : item.name}
                </h5>
                <p className="text-gray-400">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreeGames;
