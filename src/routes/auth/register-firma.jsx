import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import Navbar from "../../core/components/Navbar.jsx";
import GoogleLoginButton from "../../auth/components/GoogleLoginButton.jsx";
import { authenticateGoogle, registerCompany } from "../../auth/store/actions.js";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import EmailConfirmation from "../../core/components/EmailConfirmation.jsx";

function RegisterFirma() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordVisibleConfirmation, setPasswordVisibleConfirmation] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordConfirmationValid, setPasswordConfirmationValid] = useState(true);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isLoading, error: registerError } = useSelector((state) => state.auth);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValid || !passwordConfirmationValid) {
      return;
    }

    try {
      const result = await dispatch(registerCompany({ name, email, password }));

      if (registerCompany.fulfilled.match(result)) {
        setShowEmailConfirmation(true);
      } else {
        setError(result.error.message);
        console.error(result.error.message);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  const handleGoogleAuth = async (response) => {
    const accessToken = response.credential;
    const role = "company";

    const result = await dispatch(authenticateGoogle({ accessToken, role }));

    if (authenticateGoogle.fulfilled.match(result)) {
      navigate('/feed');
    } else {
      setError(result.error.message);
    }
  };

  const handleCloseEmailConfirmation = () => {
    setShowEmailConfirmation(false);
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div>
      <Helmet>
        <title>Karijerko - Registracija firme</title>
        <meta name="description" content="Napravi račun i pokaži svoju firmu ljudima koje je stvarno briga." />
      </Helmet>
      <Navbar showLink={false} />

      <div className="pt-16 sm:pt-0 flex flex-col justify-center items-center h-screen">
        <div className="mb-5 text-[25px] font-bold">Registracija</div>
        <div className="flex justify-center w-auto h-auto p-3 border-4 border-Swan rounded-xl max-w-[400px]">
          <div className="flex flex-col mt-4 p-2">
            <div className="p-2">Ime firme</div>
            <input
              type="text"
              placeholder="Unesite ime firme..."
              value={name}
              onChange={handleNameChange}
              className="p-2 border-2 mb-2 rounded-md bg-[#FBFBFB] outline-none min-w-[320px] min-h-[40px]"
            />

            <div className="p-2">E-mail adresa</div>
            <input
              type="email"
              placeholder="Unesite e-mail..."
              value={email}
              onChange={handleEmailChange}
              className={`p-2 border-2 mb-2 rounded-md bg-[#FBFBFB] outline-none min-h-[40px] ${
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
                <div className="absolute mb-2 inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
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
                <div className="absolute mb-2 inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
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
            <button
              className="mt-2 p-1 text-white flex justify-center w-full bg-Primary rounded-md"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Registriranje..." : "Registriraj se"}
            </button>

            {error && (
              <p className="text-red-500 text-xs ml-2">
                {error}
              </p>
            )}

            <div className="mt-7 flex justify-center items-center">
              <hr className="w-64 border-gray-300" />
            </div>

            <div className="mt-4 flex justify-center items-center">
            <GoogleLoginButton onSuccess={handleGoogleAuth} />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          Registriraj se kao &nbsp;
          <Link to="/register" className="text-Primary font-semibold">
            korisnik
          </Link>
        </div>

        <div className="p-4 text-[10px] flex justify-center items-center">
          Već imaš račun? &nbsp;
          <Link to="/login" className="font-semibold">
            Prijavi se
          </Link>
        </div>

        {showEmailConfirmation && <EmailConfirmation onClose={handleCloseEmailConfirmation} isCompany={true} />}
      </div>
    </div>
  );
}

export default RegisterFirma;
