import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import data from "./ComingSoonData";

const ComingSoonGames = () => {
  return (
    <div className="coming--soon--wrapper p-4 flex flex-col gap-4 text-white my-6">
      <h6 className="text-center font-medium sm:text-left">
        Coming Soon from Paradox Interactive
      </h6>
      <div className="new--games--wrapper py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="sale--slide flex flex-col gap-2 text-left h-max"
            >
              <div className="item--img">
                <img
                  className="rounded-md h-60 sm:40 object-cover w-full"
                  src={item.image}
                  alt={item.name}
                />
                <div className="pin--btn">
                  <Unicons.UilPlus className="plus--sign" />
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="uppercase text-gray-400 text-sm">
                  base game
                </span>
                <h2 className="name my-0 text-lg uppercase">{item.name}</h2>
                {item.availableDate && (
                  <span className="text-gray-400 text-sm rounded-md">
                    {item.availableDate}
                  </span>
                )}
                {item.price && (
                  <p className="actual--price text-lg text-gray-300">
                    &#8377;{item.price}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComingSoonGames;
