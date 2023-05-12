import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const SaleItem = ({ uppercase, data, handleDiscount, numberWithCommas }) => {
  return (
    <div className="sale--slide flex flex-col gap-2 text-left h-max">
      <div className="item--img">
        <img
          className="rounded-md object-cover"
          loading="lazy"
          src={data.image}
          alt={data.name}
        />
        <div className="pin--btn">
          <Unicons.UilPlus className="plus--sign" />
        </div>
      </div>
      <span className="uppercase text-gray-300 ml-2">base game</span>
      <h2 className={`name my-0 ml-2 text-lg ${uppercase ? "uppercase" : ""}`}>
        {data.name}
      </h2>
      <div className="price--container flex justify-start gap-3 px-2 items-center">
        {data.discount && (
          <span className="discount bg-blue-500 py-1 px-2 text-sm rounded-md">
            -{data.discount}%
          </span>
        )}
        <p
          className={`actual--price text-lg text-gray-300 ${
            data.discount ? "line-through" : ""
          }`}
        >
          {data.price ? `₹${numberWithCommas(data.price)}` : "free"}
        </p>
        {data.discount && (
          <span className="text-lg">
            &#8377;{numberWithCommas(handleDiscount(data.price, data.discount))}
          </span>
        )}
      </div>
    </div>
  );
};

export default SaleItem;
