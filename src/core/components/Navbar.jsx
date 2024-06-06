import { Link } from "react-router-dom";
import LogoFull from "../../assets/Logo_full.svg";
import LogoShort from "../../assets/Logo_short.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../auth/store/actions.js";
import { useState } from "react";

export default function Navbar({ showLink = true }) {
  const dispatch = useDispatch();
  const { isAuthenticated, account } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogut = async () => {
    const result = await dispatch(logout());

    if (logout.fulfilled.match(result)) {
      navigate('/');
    }
  };


  const loginButton = (
    <Link
      to={"/login"}
      className="text-white text-base lg:text-md p-2 font-semibold bg-Primary rounded-md border-2 border-Swan"
    >
      Prijavi se
    </Link>
  );

  const accountButton = (
    <div className="relative">
      <div
        className="w-10 h-10 lg:w-11 lg:h-11 border-2 border-gray-400 rounded-full cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHqe3q7qQA3XQ/profile-displayphoto-shrink_200_200/0/1714681109181?e=1723075200&v=beta&t=xMKS3vHfD_GGg8JSAS1oHcgxeufPCvvL1qvvJSwqysE"
          className="rounded-full w-full h-full"
          alt=""
        />
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 py-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <Link
            to="/profile"
            className="text-right block px-4 py-2 text-gray-800 hover:font-medium"
          >
            Moj Profil
          </Link>
          <div onClick={handleLogut} className="text-right block px-4 py-2 text-gray-800 cursor-pointer hover:font-medium">
            Odjavi se
          </div>
        </div>
      )}
    </div>
  );

  const navbarButton = isAuthenticated ? accountButton : loginButton;

  return (
    <div className="flex px-6 lg:px-16 py-4 shadow-md fixed w-full top-0 z-40 bg-white justify-between">
      <Link to={"/"} className="w-fit flex flex-col">
        <img src={LogoFull} alt="" className="h-10 hidden lg:block" />
        <img src={LogoShort} alt="" className="h-10 lg:hidden" />
      </Link>
      {showLink && navbarButton}
    </div>
  );
}
