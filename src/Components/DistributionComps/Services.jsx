import React from "react";

const Services = () => {
  return (
    <>
      <div className="services--container my-4 flex flex-col lg:flex-row gap-4 font-poppins">
        <div className="services--comp basis-full lg:basis-1/2 flex items-center justify-between p-4">
          <div className="flex justify-center items-center basis-2/5">
            <img
              className="w-56 h-56 lg:w-72 lg:h-72 object-cover"
              src="./imgs/distribution-imgs/epic-games-logo.svg"
              alt="epic-games"
            />
          </div>
          <div className="flex flex-col basis-full basis-3/5 p-4 gap-6 text-center justify-between items-center">
            <h3 className="text-base lg:text-xl text-gray-400">
              A modular set of online services to connect you community across
              all platforms
            </h3>
            <a
              className="underline text-sm lg:text-base text-gray-300 ease-in-out duration-400 hover:text-blue-500"
              onClick={(e) => e.preventDefault()}
              href="#"
            >
              Explore our services
            </a>
          </div>
        </div>
        <div className="services--comp basis-full lg:basis-1/2 flex items-center justify-between p-4">
          <div className="flex justify-center items-center basis-2/5">
            <img
              className="w-56 h-56 lg:w-72 lg:h-72 object-cover"
              src="./imgs/distribution-imgs/unreal-engine-logo.svg"
              alt="epic-games"
            />
          </div>
          <div className="flex flex-col basis-full basis-3/5 p-4 gap-6 text-center justify-between items-center">
            <h3 className="text-base lg:text-xl text-gray-400">
              The world's most open and advanced real-time 3D creating tool
            </h3>
            <a
              className="underline text-sm lg:text-base text-gray-300 ease-in-out duration-400 hover:text-blue-500"
              onClick={(e) => e.preventDefault()}
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
