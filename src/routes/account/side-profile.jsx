import React from 'react'
import LogoShort from "../../assets/Logo_short.svg";

function sideProfile() {
  return (
    <div>
      <div className="fixed top-20 left-0 min-w-[270px] max-w-[300px] pt-20 hidden xl:block">
          <div className="relative p-4 border border-Swan rounded-t-xl">
            <div className="flex justify-center relative">
              <img
                src={LogoShort}
                alt="Logo"
                className="w-14 h-14 absolute -top-12 bg-white"
              />
            </div>
            <div className="flex flex-col items-center mt-10">
            <div>
              Ime i Prezime
            </div>
            <div>
              Razvoj software
            </div>
            </div>
          </div>
          <div className="p-4 border border-Swan">
            <div>
              Portfolio
            </div>
            <div>
              react bubam
            </div>
          </div>
          <div className="p-4 border border-Swan rounded-b-md">
            Uredi Portfolio
          </div>
        </div>
    </div>
  )
}

export default sideProfile
