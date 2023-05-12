import React from "react";
import data from "./GoalsData";

const Goals = () => {
  return (
    <>
      <div className="goals--container grid grid-cols-1 lg:grid-cols-3 my-6 gap-8 lg:gap-14">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="goals--card font-poppins flex flex-col text-center items-center border border-gray-500 p-4 rounded-md gap-5 justify-between"
            >
              <img
                loading="lazy"
                className="w-32 h-32"
                src={item.image}
                alt={item.heading}
              />
              <h2 className="text-2xl lg:text-3xl">{item.heading}</h2>
              <p className="text-sm lg:text-base text-gray-300">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Goals;
