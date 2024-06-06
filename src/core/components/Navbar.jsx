import { Link } from "react-router-dom";
import LogoFull from "../../assets/Logo_full.svg";
import LogoShort from "../../assets/Logo_short.svg";
import Profile from "../../assets/icons/Profile.svg";
import SignOut from "../../assets/icons/sign_out.svg";
import Verified from "../../assets/icons/Verified.svg";
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
    await dispatch(logout());
  };

  const profileData = {
    name: "Ime i Prezime",
    mail: "benjo1ssssss23@gmail.com",
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
          src={account.profilePicture}
          className="rounded-full w-full h-full"
          alt=""
        />
      </div>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 py-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="px-4 border-b-2 py-2 text-[10px]">
            <div className="flex flex-row items-center">
              <div className="truncate" title={profileData.name}>
                {profileData.name}
              </div>

              <img className="w-3" src={Verified} alt="" />
            </div>
            <div className="truncate" title={profileData.mail}>
              {profileData.mail}
            </div>
          </div>

          <Link
            to="/profile"
            className="text-right block px-4 py-2 text-gray-800 hover:font-medium"
          >
            <div className="flex flex-row">
              <img className="w-4 mr-1" src={Profile} alt="" />
              <div>Moj Profil</div>
            </div>
          </Link>
          <div
            onClick={handleLogut}
            className="text-right block px-4 py-2 text-gray-800 cursor-pointer hover:font-medium"
          >
            <div className="flex flex-row">
              <img className="w-4 mr-1" src={SignOut} alt="" />
              <div>Odjavi se</div>
            </div>
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
