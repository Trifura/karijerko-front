import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Navbar from "../../core/components/Navbar.jsx";
import GoogleLoginButton from "../../auth/components/GoogleLoginButton.jsx";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordVisibleConfirmation, setPasswordVisibleConfirmation] =
    useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordConfirmationValid, setPasswordConfirmationValid] =
    useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTogglePasswordVisibilityConfirmation = () => {
    setPasswordVisibleConfirmation(!passwordVisibleConfirmation);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
    setPasswordConfirmationValid(e.target.value === password);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div>
      <Helmet>
        <title>Karijerko - Registracija</title>
        <meta name="description" content="Napravi račun i upoznaj Karijerka kako bi zajedno izgradili tvoj portfolio i osigurali ti firmu tvojih snova." />
      </Helmet>

      <Navbar showLink={false} />

      <div className="pt-16 sm:pt-12 flex flex-col justify-center items-center h-screen">
        <div className="mb-5 text-[25px] font-bold">Registracija</div>
        <div className="flex justify-center w-auto h-auto p-3 border-4 border-Swan rounded-xl max-w-[500px]">
          <div className="flex flex-col mt-4 p-2">
            <div className="p-2">Ime</div>
              <input
                type="text"
                placeholder="Unesite ime..."
                className={`p-2 border-2 mb-2 rounded-md bg-[#FBFBFB] outline-none min-w-[320px] min-h-[40px] 
                `}
              />

            <div className="p-2">Prezime</div>
              <input
                type="text"
                placeholder="Unesite prezime..."
                className={`p-2 border-2 mb-2 rounded-md bg-[#FBFBFB] outline-none 
                `}
              />

            <div className="p-2">E-mail adresa</div>
              <input
                type="email"
                placeholder="Unesite e-mail..."
                value={email}
                onChange={handleEmailChange}
                className={`p-2 border-2 mb-2 rounded-md bg-[#FBFBFB] outline-none ${
                  emailValid ? "border-Swan" : "border-red-500"
                }`}
              />
            {!emailValid && (
              <p className="text-red-500 text-xs ml-2">
                Unesite validnu e-mail adresu
              </p>
            )}
            <div className="p-2">Lozinka</div>
            <div className="w-full relative">
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Unesite lozinku..."
                  value={password}
                  onChange={handlePasswordChange}
                  className="p-2 border-2 border-Swan mb-2 rounded-md bg-[#FBFBFB] outline-none w-full min-h-[40px] pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  {passwordVisible ? (
                    <HiEyeOff onClick={handleTogglePasswordVisibility} />
                  ) : (
                    <HiEye onClick={handleTogglePasswordVisibility} />
                  )}
                </div>
              </div>
            </div>

            <div className="p-2">Potvrda Lozinke</div>
            <div className="flex justify-center w-full relative">
              <div className="relative w-full">
                <input
                  type={passwordVisibleConfirmation ? "text" : "password"}
                  placeholder="Potvrdite lozinku..."
                  value={passwordConfirmation}
                  onChange={handlePasswordConfirmationChange}
                  className={`p-2 border-2 mb-2 rounded-md bg-[#FBFBFB] outline-none w-full min-h-[40px] pr-10 ${
                    passwordConfirmationValid ? "border-Swan" : "border-red-500"
                  }`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  {passwordVisibleConfirmation ? (
                    <HiEyeOff
                      onClick={handleTogglePasswordVisibilityConfirmation}
                    />
                  ) : (
                    <HiEye
                      onClick={handleTogglePasswordVisibilityConfirmation}
                    />
                  )}
                </div>
              </div>
            </div>
            {!passwordConfirmationValid && (
              <p className="text-red-500 text-xs ml-2">
                Lozinke se ne podudaraju
              </p>
            )}
            <div
              className="mt-2 p-1 text-white flex justify-center w-full bg-Primary rounded-md"
              onClick={handleSubmit}
            >
              Registriraj se
            </div>

            <div className="mt-7 flex justify-center items-center">
              <hr className="w-64 border-gray-300" />
            </div>

            <div className="mt-4 flex justify-center items-center">
              <GoogleLoginButton onSuccess={(data) => console.log(data)} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          Registriraj se kao &nbsp;
          <Link to="/register-company" className="text-Primary font-semibold">
            firma
          </Link>
        </div>

        <div className="p-4 text-[10px] flex justify-center items-center">
          Već imaš račun? &nbsp;
          <Link to="/login" className="font-semibold">
            Prijavi se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
