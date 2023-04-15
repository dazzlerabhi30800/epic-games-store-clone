import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import data from "./AccordianData";

const Accordian = () => {
  const [accordianData, setAccordianData] = useState(data);
  const handleAccordian = (id) => {
    setAccordianData(
      accordianData.map((item) => {
        if (item.id === id) {
          return { ...item, ask: !item.ask };
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="accordian--wrapper flex flex-col my-4 gap-10">
        <h4 className="text-4xl font-bold mx-auto">
          Frequently Asked Questions
        </h4>
        <div className="accordian--container flex flex-col gap-8">
          {accordianData.map((data, index) => {
            return (
              <div
                key={index}
                className="accordian flex flex-col gap-4 py-4 border-b border-gray-500"
              >
                <button
                  onClick={() => handleAccordian(data.id)}
                  className={`flex items-center text-left text-base lg:text-xl pr-4 font-semibold justify-between ${
                    data.ask ? "text-cyan-400" : "text-white"
                  } ease-in-out duration-300 hover:text-cyan-400`}
                >
                  <span className="basis-3/4 lg:basis-auto">
                    {data.question}
                  </span>
                  {data.ask ? <Unicons.UilMinus /> : <Unicons.UilPlus />}
                </button>
                <p
                  className={`text-gray-300 text-sm lg:text-base ${
                    data.ask ? "block" : "hidden"
                  }`}
                >
                  {data.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
