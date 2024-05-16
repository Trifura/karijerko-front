import React from "react";
import Navbar from "../../Components/Navbar";
import "../../index.css";
import Line from "../../assets/Line.svg";

import GoogleLog from "../../assets/Login-Google.svg";

function Login() {
  return (
    <div>
      <Navbar showLink={false} />

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-5 text-[25px] font-bold">Prijava</div>
        <div className="flex justify-center w-[370px] h-[470px] border-4 border-Swan rounded-xl">
          <div className="flex flex-col mt-4 p-2">
            <div className="p-2">E-mail adresa</div>
            <div className="flex justify-center w-full">
              <input
                type="text"
                placeholder="Unesite e-mail..."
                className="p-2 border-2 border-Swan mb-4 rounded-md bg-[#FBFBFB] outline-none w-[300px] h-[40px]"
              />
            </div>
            <div className="p-2">Lozinka</div>
            <div className="flex justify-center w-full">
              <input
                type="password"
                placeholder="Unesite lozinku..."
                className="p-2 border-2 border-Swan mb-4 rounded-md bg-[#FBFBFB] outline-none w-[300px] h-[40px]"
              />
            </div>

            <div className="p-2">Potvrda Lozinke</div>
            <div className="flex justify-center w-full">
              <input
                type="password"
                placeholder="Unesite lozinku..."
                className="p-2 border-2 border-Swan mb-4 rounded-md bg-[#FBFBFB] outline-none w-[300px] h-[40px]"
              />
            </div>

            <div className="mt-2 p-1 text-white flex justify-center w-full bg-Primary rounded-md">
              Pirjavi se
            </div>

            <div className="mt-7 flex justify-center items-center">
              <img src={Line} alt="Line" />
            </div>

            <div className="mt-7 flex justify-center items-center">
              <img src={GoogleLog} alt="Line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
