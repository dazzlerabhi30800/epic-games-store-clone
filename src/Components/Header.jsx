import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import Logo from "./Logo";
import useResize from "../useResize";

const Header = () => {
  let windowSize = useResize();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className={`flex ${
        windowSize.size < 1100 ? "justify-between" : "justify-start"
      } items-start w-full gap-2 text-white bg-gray-700 text-base`}
    >
      <div className="logo p-3 h-full">
        <Logo />
      </div>
      <nav
        className={
          windowSize.size < 1100
            ? `flex flex-col w-3/4 h-full z-40 bg-gray-800 ${
                showMenu ? "translate-x-0" : "translate-x-full"
              } top-0 right-0 justify-between absolute ease-in duration-300`
            : "flex flex-row justify-between static w-full h-full gap-8"
        }
      >
        <ul
          className={
            windowSize.size < 1100
              ? "flex flex-col "
              : "flex flex-row items-center  tracking-wider whitespace-nowrap font-poppins gap-0 justify-between"
          }
        >
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
          <div
            className={
              windowSize.size < 1100
                ? "hidden"
                : "block h-10 mx-2 bg-white w-0.5 opacity-80"
            }
          ></div>
          <li className="relative after:absolute p-4 h-full cursor-pointer after:bottom-0  after:left-0 after:w-full after:opacity-0 after:ease-in after:duration-200 hover:after:opacity-100 after:h-1 after:bg-sky-500">
            <a
              className="ease-in duration-200 hover:opacity-80 uppercase"
              href="#"
            >
              unreal engine
            </a>
          </li>
        </ul>
        <div
          className={
            windowSize.size < 1100
              ? "grid grid-cols-2 place-items-start place-content-stretch w-full"
              : "flex flex-row min-h-full w-1/2 items-center gap-6 justify-end pl-3"
          }
        >
          <a
            href="#"
            className={
              windowSize.size < 1100
                ? "bg-gray-500 py-4 w-full flex justify-center"
                : "no-underline ease-in duration-200 hover:opacity-80"
            }
          >
            <Unicons.UilGlobe />
          </a>
          <button
            className={
              windowSize.size < 1100
                ? "flex bg-violet-700 w-full py-4 gap-3 justify-center"
                : "flex gap-3 ease-in duration-200 hover:opacity-80"
            }
          >
            <Unicons.UilUser />
            <span>Sign In</span>
          </button>
          <button
            className={
              windowSize.size < 1100
                ? "py-4 bg-sky-400 w-full col-span-2"
                : "ease-in duration-200 hover:bg-sky-400 bg-sky-500 text-base h-full px-6 uppercase"
            }
          >
            Download
          </button>
        </div>
      </nav>
      {windowSize.size < 1100 && (
        <button
          className={`flex z-50 ${
            !showMenu ? "bg-sky-400" : ""
          } ease-in duration-300 min-h-full p-4 md:select-none`}
          onClick={() => setShowMenu((prevState) => !prevState)}
        >
          {showMenu ? (
            <Unicons.UilTimes className="select-none" />
          ) : (
            <Unicons.UilBars className="select-none" />
          )}
        </button>
      )}
    </header>
  );
};

export default Header;
