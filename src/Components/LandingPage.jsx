import React from "react";
import { Link } from "react-router-dom";
import LogoFullW from "../assets/Logo_fullW.svg";
import Wave from "../assets/Landing_Wave.svg";
import LogoB from "../assets/LogoBubble.svg";
import Yellow_line from "../assets/Yellow_line.svg";
import RightA from "../assets/icons/Right-arrow.svg";
import Bottom from "../assets/Bottom.svg";

import sczgLogo from "../assets/sczg.png";

function LandingPage() {
  return (
    <div className="">
      <div className="bg-[#58CC02] px-5 py-4 shadow-md">
        <Link to={"/"}>
          <img src={LogoFullW} alt="" />
        </Link>
      </div>

      <div className="flex bg-[#58CC02] px-5 py-4 h-full justify-center items-center">
        <div className="flex-grow"></div>
        <div className="">
          <div className="flex">
            <div className="flex flex-col p-2">
              <Link to={"/"}>
                <img src={LogoB} alt="" />
              </Link>
            </div>

            <div className="flex flex-col">
              <div>
                <div className="p-2 w-[420px] h-[96px] text-md bg-white rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-md">
                  Bok, ja sam Karijerko. Predstavi mi se i uz moju pomoć pronađi
                  najbolju kompaniju za sebe te unaprijedi svoje vještine!
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <div className="bg-white rounded-lg px-4 py-2 text-md">
                  Započni razgovor
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow"></div>
        <div className="w-[470px] text-[62px] text-white flex flex-col">
          Tvoj virtualni mentor za karijerno usmjeravanje
        </div>
        <div className="flex-grow"></div>
      </div>

      <div>
        <Link to={"/"}>
          <img src={Wave} alt="" />
        </Link>
      </div>

      <div className="text-[62px] flex mt-[50px]">
        <div className="flex-grow"></div>
        <div className="p-3">Firme za tebe</div>
        <div className="flex-grow"></div>
      </div>

      <div className="flex mt-[50px]">
        <div className="flex-grow"></div>
        <div className="p-2">
          <div className="flex flex-col border border-gray-300 rounded-lg p-2 w-[350px]">
            <div className="flex">
              <div className="flex-col">
                <img
                  src={sczgLogo}
                  alt="SCZG"
                  className="w-[50px] h-[50px] rounded-xl p-1"
                />
              </div>
              <div className="flex-col">
                <div>Treblle</div>
                <div>Software Development</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-col border border-gray-300 rounded-lg p-2 w-[350px]">
            <div className="flex">
              <div className="flex-col">
                <img
                  src={sczgLogo}
                  alt="SCZG"
                  className="w-[50px] h-[50px] rounded-xl p-1"
                />
              </div>
              <div className="flex-col">
                <div>Treblle</div>
                <div>Software Development</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="flex flex-col border border-gray-300 rounded-lg p-2 w-[350px]">
            <div className="flex">
              <div className="flex-col">
                <img
                  src={sczgLogo}
                  alt="SCZG"
                  className="w-[50px] h-[50px] rounded-xl p-1"
                />
              </div>
              <div className="flex-col">
                <div>Treblle</div>
                <div>Software Development</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow"></div>
      </div>
      <div className="underline">
        Pogledaj sve firme
        <img src={RightA} alt="" />
      </div>

      <div className="flex p-10 mt-[100px]">
        <div className="flex-grow"></div>
        <div className="flex-col">
          <img src={Yellow_line} alt="Yellow line" />
        </div>

        <div className="flex-grow"></div>
      </div>

      <div className="relative min-h-screen flex mt-[80px]">
  <div className="flex-grow"></div>
  <div className="flex flex-col items-center justify-center border border-gray-300 bg-white w-[810px] h-[630px] relative z-10">
    <p class="text-center"></p>
  </div>
  <div className="flex-grow"></div>

  <div className="absolute bottom-0 left-0 w-full mt-16">
    <img src={Bottom} alt="" />
  </div>
</div>


    </div>
  );
}

export default LandingPage;
