import React from "react";

const Category = () => {
  return (
    <div className="p-4 flex flex-col gap my-4 justify-center gap-10 items-center h-auto md:flex-row">
      <img
        src="./imgs/sale-imgs/category-2.jpg"
        className="basis-full md:basis-2/5  lg:basis-1/2 h-96 md:h-72 lg:h-110 rounded-xl ease-in duration-300 hover:brightness-150 object-cover"
        alt="category"
      />
      <div className="info basis-full  w-full p-2 md:basis-3/5 lg:basis-1/2 flex flex-col gap-5 text-white">
        <h3 className="text-md">SMITE - New Season and Gems Sale</h3>
        <p className="text-sm text-gray-400 special--para">
          Explore a vibrant New Map, new Battle Pass, and in-game Gems sale.
        </p>
        <a
          onClick={(e) => e.preventDefault()}
          href="#"
          className="w-fit uppercase py-3 px-4 my-4 rounded-sm text-base bg-white text-black font-medium"
        >
          browse all
        </a>
      </div>
    </div>
  );
};

export default Category;
