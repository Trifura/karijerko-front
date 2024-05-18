import { useState } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import "../../index.css";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../../auth/components/GoogleLoginButton.jsx";
import { HiEye, HiEyeOff } from "react-icons/hi";
import {useDispatch} from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setEmailValid(validateEmail(enteredEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);

  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <Navbar showLink={false} />

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-5 text-[25px] font-bold">Prijava</div>
        <div className="flex justify-center w-[370px] h-[400px] border-4 border-Swan rounded-xl">
          <div className="flex flex-col mt-4 p-2">
            <div className="p-2">E-mail adresa</div>
            <div className="flex justify-center w-full">
              <input
                type="text"
                placeholder="Unesite e-mail..."
                value={email}
                onChange={handleEmailChange}
                className={`p-2 border-2 border-Swan mb-4 rounded-md bg-[#FBFBFB] outline-none w-[300px] h-[40px] ${
                  emailValid ? "border-Swan" : "border-red-500"
                }`}
              />
            </div>
            {!emailValid && (
              <p className="text-red-500 text-xs ml-2">
                Unesite validnu e-mail adresu
              </p>
            )}
            <div className="p-2">Lozinka</div>
            <div className="flex justify-center w-full relative">
              <div className="flex">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Unesite lozinku..."
                  value={password}
                  onChange={handlePasswordChange}
                  className="p-2 border-t-2 border-l-2 border-b-2 border-Swan mb-2 rounded-l-md bg-[#FBFBFB] outline-none w-[270px] h-[40px]"
                />
                <div className="p-2 flex flex-col cursor-pointer border-t-2 border-r-2 border-b-2 border-Swan rounded-r-md bg-[#FBFBFB] w-[30px] h-[40px]">
                  {passwordVisible ? (
                    <HiEyeOff onClick={handleTogglePasswordVisibility} />
                  ) : (
                    <HiEye onClick={handleTogglePasswordVisibility} />
                  )}
                </div>
              </div>
            </div>

            <div
              className="mt-2 p-1 text-white flex justify-center w-full bg-Primary rounded-md"
              onClick={handleSubmit}
            >
              Prijavi se
            </div>

            <div className="mt-7 flex justify-center items-center">
              <hr className="w-64 border-gray-300" />
            </div>

            <div className="mt-7 flex justify-center items-center">
              <GoogleLoginButton onSuccess={(data) => console.log(data)} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          Novi u Karijerku? &nbsp;
          <Link to="/registracija" className="text-Primary font-semibold">
            Napravi račun
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
