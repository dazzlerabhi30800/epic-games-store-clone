import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Logo from "../Logo";
import UnrealLogo from "../UnrealLogo";

const Footer = () => {
  return (
    <footer className="font-poppins">
      <div className="footer--wrapper gap-10">
        <div className="social--links flex items-center justify-between">
          <div className="social flex justify-center gap-6">
            <Unicons.UilFacebook className="w-8 h-8 ease-in-out duration-300 hover:text-blue-500" />
            <Unicons.UilTwitter className="w-8 h-8 ease-in-out duration-300 hover:text-sky-500" />
            <Unicons.UilYoutube className="w-8 h-8 ease-in-out duration-300 hover:text-red-600" />
          </div>
          <div
            onClick={() => window.scrollTo(0, 0)}
            className="scroll--button border-slate-400 border-2 border-solid ease-in-out duration-300 hover:bg-white hover:text-black hover:border-transparent rounded-sm"
          >
            <Unicons.UilAngleUp className="w-8 h-8" />
          </div>
        </div>
        <div className="links--wrapper flex flex-col gap-10">
          <div className="links--container flex flex-col gap-1">
            <h6 className="font-semibold text-gray-500">Resources</h6>
            <div className="links flex  flex-wrap gap-16 items-start">
              <ul>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Support-A-Creator
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Distribute on Epic Games
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Company
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Fan Art Policy
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    UX Research
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Store EULA
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Online Services
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Community Rules
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Epic Newsroom
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="links--container flex flex-col gap-1">
            <h6 className="font-semibold text-gray-500">Made By Epic Games</h6>
            <div className="links flex gap-16 items-start">
              <ul>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Battle Breakers
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Fortnite
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Infinity Blade
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Robo Recall
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Shadow Complex
                  </a>
                </li>
                <li>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    Unreal Tournament
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright--wrapper flex flex-col gap-10 my-4">
          <span className="copyright text-center md:text-left w-full md:w-1/2 text-gray-400">
            © 2023, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
            Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
            the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
            logo are trademarks or registered trademarks of Epic Games, Inc.
            This website is for only education Purposes and hence doesn't have
            any connection with official brand.
          </span>
          <div className="terms flex flex-col gap-10 md:gap-6 md:flex-row items-center justify-center md:justify-between">
            <div className="terms--links flex flex-col md:flex-row text-center md:text-left justify-center gap-4">
              <a onClick={(e) => e.preventDefault()} href="#">
                Terms Of Service
              </a>
              <a onClick={(e) => e.preventDefault()} href="#">
                Privacy Policy
              </a>
              <a onClick={(e) => e.preventDefault()} href="#">
                Store Refund Policy
              </a>
            </div>
            <div className="brand--logo flex gap-10 md:gap-4 items-center">
              <Logo />
              <UnrealLogo />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
