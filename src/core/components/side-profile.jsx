import React from "react";
import LogoShort from "../../assets/Logo_short.svg";
import Verified from "../../assets/icons/Verified.svg";

const profileData = {
  name: "Ime i Prezime",
  role: "Razvoj software",
  portfolioSubtitles: ["react bubam", "node.js development", "UI/UX design"],
};

function SideProfile() {
  return (
    <>
      <div className="mt-20 p-4 border-[3px] border-Swan rounded-xl min-w-[200px] max-w-[400px] sticky top-20">
        <div className="flex">
          <div className="flex flex-row p-1">
            <img
              className="p-1 w-[50px] border-2 border-Swan rounded-full"
              src={LogoShort}
              alt=""
            />
          </div>
          <div className="">
            <div className="flex flex-row p-1 underline underline-offset-2">
              <div>Ime i prezime</div>
              <div className="ml-[5px] mt-[2px]">
                <img src={Verified} alt="" />
              </div>
            </div>

            <div className="">Lokacija</div>
          </div>
        </div>
        <div className="mt-[30px]">
          <div>Profil</div>

          <div className="flex flex-row">
            <div>
              <input
                type="checkbox"
                className="focus:outline-none form-checkbox h-5 w-5 text-green-500 rounded-full"
              />
            </div>
            <div>Back-end developer</div>
          </div>

          <div className="flex flex-row">
            <div>
              <input
                type="checkbox"
                className="box-shadow-none outline-none form-checkbox h-5 w-5 text-green-500 rounded-full"
              />
            </div>
            <div>Front-end developer</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideProfile;
