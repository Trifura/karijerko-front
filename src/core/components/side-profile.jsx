import React from "react";
import LogoShort from "../../assets/Logo_short.svg";

const profileData = {
  name: "Ime i Prezime",
  role: "Razvoj software",
  portfolioSubtitles: ["react bubam", "node.js development", "UI/UX design"]
};

function SideProfile() {
  return (
    <div>
      <div className="fixed top-20 left-5 min-w-[270px] max-w-[300px] pt-20 hidden xl:block">
        <div className="relative p-4 border border-Swan rounded-t-xl">
          <div className="flex justify-center relative">
            <img
              src={LogoShort}
              alt="Logo"
              className="w-14 h-14 absolute -top-12 bg-white"
            />
          </div>
          <div className="flex flex-col items-center mt-10">
            <div>{profileData.name}</div>
            <div>{profileData.role}</div>
          </div>
        </div>
        <div className="p-4 border border-Swan min-h-[300px] max-h-[400px]">
          <div className="text-[20px] font-bold">Portfolio</div>
          <div>
            {profileData.portfolioSubtitles.map((subtitle, index) => (
              <div  className="p-1 border border-Swan rounded-xl mb-2" key={index}>{subtitle}</div>
            ))}
          </div>
        </div>
        <div className="text-[#005897] flex justify-center relative p-2 border border-Swan rounded-b-md">
          Uredi Portfolio
        </div>
      </div>
    </div>
  );
}

export default SideProfile;
