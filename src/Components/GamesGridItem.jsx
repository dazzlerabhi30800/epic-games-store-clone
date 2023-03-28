import React from "react";

const GamesGridItem = ({
  gamesData,
  heading,
  handleDiscount,
  numberWithCommas,
  id,
}) => {
  return (
    <div
      className="games--grid--item justify-center w-full flex flex-col gap-3"
      id={id}
    >
      <div className="games--header flex justify-between text-sm md:text-lg px-6 items-center">
        <h4 className="flex gap-1 font-medium items-center">{heading}</h4>
        <a
          href="#"
          className="border-solid border-2 rounded border-gray-200 py-1 px-4 ease-in-out bg-transparent duration-300 hover:bg-gray-600"
        >
          View More
        </a>
      </div>
      {/* Games Grid Container start */}
      <div className="games--grid--container flex flex-col text-white ">
        {/* Games Grid Item start */}
        {gamesData.map((game, index) => {
          return (
            <div
              key={index}
              className="sale--slide flex flex-row gap-2 xl:gap-6 text-left h-max"
            >
              <div className="item--img flex">
                <img src={game.image} alt={game.name} />
              </div>
              <div className="game--info flex flex-col basis-1/2  px-2 gap-2">
                <h2 className="name my-0  uppercase">
                  {game.name.length >= 15
                    ? game.name.substring(0, 20) + "..."
                    : game.name}
                </h2>
                {game.alert && (
                  <span className="bg-zinc-700 uppercase text-xs w-fit py-1 px-2 rounded-md">
                    Now on Epic
                  </span>
                )}
                {game.available && (
                  <span className="text-xs text-gray-400">
                    {game.available}
                  </span>
                )}
                <div className="price--container  flex justify-start gap-3  items-center">
                  {game.discount && (
                    <span className="discount bg-blue-500  rounded-md">
                      -{game.discount}%
                    </span>
                  )}
                  <p
                    className={`actual--price text-gray-400 ${
                      game.price ? "line-through" : ""
                    }`}
                  >
                    {game.price ? `₹${numberWithCommas(game.price)}` : "free"}
                  </p>
                  {game.discount && (
                    <span className="text-gray-100">
                      &#8377;
                      {numberWithCommas(
                        handleDiscount(game.price, game.discount)
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {/* Grid Games Item Item */}
      </div>
      {/* Grid Games Container End */}
    </div>
  );
};

export default GamesGridItem;
