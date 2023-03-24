import React from "react";

const SaleItem = ({ data }) => {
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
    <div className="sale--slide flex flex-col gap-2 text-left h-max">
      <div className="item--img">
        <img className="rounded-md" src={data.image} alt={data.name} />
      </div>
      <span className="uppercase text-gray-300">base game</span>
      <h2 className="name my-0 text-lg uppercase">{data.name}</h2>
      <div className="price--container flex justify-start gap-3 px-2 items-center">
        {data.discount && (
          <span className="discount bg-blue-500 py-1 px-2 text-sm rounded-md">
            -{data.discount}%
          </span>
        )}
        <p
          className={`actual--price text-lg text-gray-300 ${
            data.price ? "line-through" : ""
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
