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
      <div className="bg-[#58CC02] px-3 py-2 shadow-md">
        <Link to={"/"}>
          <img src={LogoFullW} alt="" />
        </Link>
      </div>

      <div className="md:flex bg-[#58CC02] px-3 py-2 h-full justify-center items-center">
        <div className="flex-grow"></div>
        <div className="">
          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col p-1 lg:h-[120px] lg:w-[120px] md:h-[100px] md:w-[100px] sm:h-[85px] sm:w-[85px] xs:h-[70px] xs:w-[70px]">
              <Link to={"/"}>
                <img src={LogoB} alt="" />
              </Link>
            </div>

            <div className="mt-2 flex flex-col">
              <div>
                <div className="border border-gray-300 p-2 w-[320px] h-[72px] text-sm bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-md">
                  Bok, ja sam Karijerko. Predstavi mi se i uz moju pomoć pronađi
                  najbolju kompaniju za sebe te unaprijedi svoje vještine!
                </div>
              </div>

              <div className="flex flex-row justify-end mt-2">
                <div className="bg-white rounded-lg px-2 py-1 text-sm">
                  Započni razgovor
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex-grow"></div>
        <div className="w-[350px] text-[62px] text-white flex sm:flex-row flex-col">
          Tvoj virtualni mentor za karijerno usmjeravanje
        </div>
        <div className="md:flex-grow"></div>
      </div>

      <div>
        <Link to={"/"}>
          <img src={Wave} alt="" className="w-full" />
        </Link>
      </div>

      <div className="text-[42px] flex mt-[40px] justify-center md:text-3xl">
        Firme za tebe
      </div>

      <div className="flex flex-col mt-3">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-row">
            <div className="p-1">
              <div className="flex flex-col border border-gray-300 rounded-lg p-1">
                <div className="flex items-center">
                  <img
                    src={sczgLogo}
                    alt="SCZG"
                    className="w-[40px] h-[40px] rounded-xl p-1"
                  />
                  <div className="ml-1">
                    <div>Treblle</div>
                    <div>Software Development</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1">
              <div className="flex flex-col border border-gray-300 rounded-lg p-1">
                <div className="flex items-center">
                  <img
                    src={sczgLogo}
                    alt="SCZG"
                    className="w-[40px] h-[40px] rounded-xl p-1"
                  />
                  <div className="ml-1">
                    <div>Treblle</div>
                    <div>Software Development</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1">
              <div className="flex flex-col border border-gray-300 rounded-lg p-1">
                <div className="flex items-center">
                  <img
                    src={sczgLogo}
                    alt="SCZG"
                    className="w-[40px] h-[40px] rounded-xl p-1"
                  />
                  <div className="ml-1">
                    <div>Treblle</div>
                    <div>Software Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <div className="p-1 text-[12px] text-black">Pogledaj sve firme</div>
          <div className="p-1">
            <img src={RightA} alt="" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[60px]">
        <img src={Yellow_line} alt="Yellow line" />
      </div>

      <div className="flex justify-center mt-[60px] h-[200px]">
        <div className="text-center text-lg xs:text-[15px] sm:text-[40px] md:text-[62px] w-full max-w-[850px]">
          <div className="flex flex-row justify-center">
            Još uvijek možeš pričati sa
          </div>
          <div className="mt-[25px] flex flex-row justify-center">
            Karijerkom!
          </div>
        </div>
      </div>

      <div className="relative min-h-screen flex mt-[40px]">
        <div className="flex-grow"></div>
        <div className="flex flex-col items-center justify-center border border-gray-300 bg-white lg:w-[600px] lg:h-[470px] md:w-[510px] md:h-[400px] sm:w-[430px] sm:h-[340px] xs:w-[370px] xs:h-[290px] relative z-10">
          <p className="text-center"></p>
        </div>
        <div className="flex-grow"></div>
        <div className="absolute bottom-0 left-0 w-full mt-12">
          <img src={Bottom} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
