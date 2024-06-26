import { useState } from "react";
import Navbar from "../../core/components/Navbar.jsx";
import "../../index.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../../auth/components/GoogleLoginButton.jsx";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { authenticateGoogle, login } from "../../auth/store/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchAll } from "../../profile/store/actions.js";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async () => {
    const result = await dispatch(login({ email, password }));

    if (login.fulfilled.match(result)) {
      const role = result.payload.role;
      if (role === 'company') {
        navigate('/dashboard');
      } else {
        await dispatch(fetchAll());
        navigate('/feed');
      }
    } else {
      setErrorMessage("Krivi email ili password");
    }
  };

  const handleGoogleAuth = async (response) => {
    const accessToken = response.credential;
    const role = "user";

    const result = await dispatch(authenticateGoogle({ accessToken, role }));

    if (authenticateGoogle.fulfilled.match(result)) {
      const role = result.payload.role;
      if (role === 'company') {
        navigate('/dashboard');
      } else {
        await dispatch(fetchAll());
        navigate('/feed');
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/feed" replace />;
  }

  return (
    <div>
      <Navbar showLink={false} />

      <Helmet>
        <meta name="description" content="Prijavi se u Karijerka i rasturi svoje karijerne ciljeve." />
        <title>Karijerko - Prijava</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="mb-5 text-[25px] font-bold">Prijava</div>
        <div className="flex justify-center max-w-[400px] p-3 border-4 border-Swan rounded-xl">
          <div className="flex flex-col mt-4 p-2">
            <div className="p-2">E-mail adresa</div>
            <input
              type="text"
              placeholder="Unesite e-mail..."
              value={email}
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
              className={`p-2 border-2 border-Swan mb-4 rounded-md bg-[#FBFBFB] outline-none min-w-[320px] min-h-[40px]`}
            />
            <div className="p-2">Lozinka</div>
            <div className="relative w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Unesite lozinku..."
                value={password}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                className="p-2 border-2 border-Swan mb-2 rounded-md bg-[#FBFBFB] outline-none w-full min-h-[40px] pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center mb-2 pr-3 cursor-pointer">
                {passwordVisible ? (
                  <HiEyeOff onClick={handleTogglePasswordVisibility} />
                ) : (
                  <HiEye onClick={handleTogglePasswordVisibility} />
                )}
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-4 text-center mb-4">{errorMessage}</div>
            )}

            <div
              className="mt-2 p-1 text-white flex justify-center w-full bg-Primary rounded-md cursor-pointer"
              onClick={handleSubmit}
            >
              Prijavi se
            </div>

            <div className="mt-7 flex justify-center items-center">
              <hr className="w-64 border-gray-300" />
            </div>

            <div className="mt-7 flex justify-center items-center">
              <GoogleLoginButton onSuccess={handleGoogleAuth} />
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-center items-center">
          Novi u Karijerku? &nbsp;
          <Link to="/register" className="text-Primary font-semibold">
            Napravi račun
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
