import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex justify-between text-white bg-gray-700 text-base">
      <nav className="flex gap-8 items-center basis-1/2 px-4">
        <Logo />
        <ul className="flex items-center  tracking-wider whitespace-nowrap font-poppins gap-0 justify-between">
          <li className="relative after:absolute cursor-pointer p-4 h-full  after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-sky-500">
            <a
              className="ease-in duration-200 hover:opacity-80 uppercase"
              href="#"
            >
              Store
            </a>
          </li>
          <li className="relative after:absolute cursor-pointer after:bottom-0 p-4 after:left-0 after:w-full after:h-1 after:opacity-0 after:ease-in after:duration-200 hover:after:opacity-100 after:bg-sky-500">
            <a
              className="ease-in duration-200 hover:opacity-80 uppercase"
              href="#"
            >
              distribution
            </a>
          </li>
          <li className="relative after:absolute p-4 h-full cursor-pointer  after:ease-in  after:duration-200 hover:after:opacity-100 after:bottom-0 after:left-0 after:w-full after:h-1 after:opacity-0 after:bg-sky-500">
            <a
              className="ease-in duration-200 hover:opacity-80 uppercase"
              href="#"
            >
              support
            </a>
          </li>
          <div className="h-10 mx-2 bg-white w-0.5 opacity-80"></div>
          <li className="relative after:absolute p-4 h-full cursor-pointer after:bottom-0  after:left-0 after:w-full after:opacity-0 after:ease-in after:duration-200 hover:after:opacity-100 after:h-1 after:bg-sky-500">
            <a
              className="ease-in duration-200 hover:opacity-80 uppercase"
              href="#"
            >
              unreal engine
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex basis-1/2  items-center gap-6 justify-end pl-3">
        <a
          href="#"
          className="no-underline ease-in duration-200 hover:opacity-80"
        >
          <Unicons.UilGlobe />
        </a>
        <button className="flex gap-3 ease-in duration-200 hover:opacity-80">
          <Unicons.UilUser />
          <span>Sign In</span>
        </button>
        <button className="ease-in duration-200 hover:bg-sky-400 bg-sky-500 text-base h-full px-6 uppercase">
          Download
        </button>
      </div>
    </header>
  );
};

export default Header;
