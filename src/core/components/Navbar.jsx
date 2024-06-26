import { Link, useNavigate } from "react-router-dom";
import LogoFull from "../../assets/Logo_full.svg";
import LogoShort from "../../assets/Logo_short.svg";
import Profile from "../../assets/icons/Profile.svg";
import SignOut from "../../assets/icons/sign_out.svg";
import Verified from "../../assets/icons/Verified.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../auth/store/actions.js";
import { useState, useEffect, useRef, useCallback } from "react";
import Search from "../../assets/icons/Search.svg";
import NotificationImg from "../../assets/icons/Notifications.svg";
import CompanyLogo from "../../assets/icons/company.svg"; 

export default function Navbar({ showLink = true, showSearch = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, account } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search?name=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getInitials = (name) => {
    if (!name) return "";

    const nameParts = name.trim().split(/\s+/);
    let initials = "";
    for (let i = 0; i < nameParts.length; i++) {
      initials += nameParts[i].charAt(0).toUpperCase();
      if (initials.length >= 2) break;
    }

    return initials;
  };

  const drawInitialsAvatar = (initials) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const colors = ["#264653"];

    const size = 44; // Width and height of the canvas
    canvas.width = size;
    canvas.height = size;

    // Randomly select a background color
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Draw circle
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = backgroundColor; // Use the selected background color
    context.fill();

    // Draw initials
    context.font = "20px Arial";
    context.fillStyle = "#ffffff"; // Text color
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(initials, size / 2, size / 2);

    return canvas.toDataURL();
  };

  const loginButton = (
    <Link
      to={"/login"}
      className="text-white text-base lg:text-md p-2 font-semibold bg-Primary rounded-md hover:bg-PrimaryDark transition duration-300 ease-in-out"
    >
      Prijavi se
    </Link>
  );

  const accountButton = (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-10 h-10 lg:w-11 lg:h-11 border-2 border-gray-400 rounded-full cursor-pointer"
        onClick={toggleDropdown}
      >
        {account && account.role !== "" ? (
          account.profilePicture ? (
            <img
              src={account?.profilePicture}
              className="rounded-full w-full h-full"
              alt=""
            />
          ) : account.role === "company" ? (
            <img
              src={CompanyLogo} // Use the company logo
              className="rounded-full w-full h-full"
              alt=""
            />
          ) : (
            <img
              src={drawInitialsAvatar(
                getInitials(`${account?.firstName} ${account?.lastName}`)
              )}
              className="rounded-full w-full h-full"
              alt=""
            />
          )
        ) : (
          <img
            src={drawInitialsAvatar(getInitials(`${account?.name}`))}
            className="rounded-full w-full h-full"
            alt=""
          />
        )}
      </div>
      {dropdownOpen && account && (
        <div className="absolute right-0 mt-2 w-[305px] py-2 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="px-4 border-b-2 py-2">
            <div className="text-[18px] flex flex-row items-center">
              <div className="text-[18px] truncate font-semibold">
                {account.role === "company"
                  ? account.name
                  : `${account.firstName} ${account.lastName}`}
              </div>
              <img className="w-4 ml-2" src={Verified} alt="" />
            </div>
            <div className="text-gray-600 truncate">{account.email}</div>
          </div>

          <Link
            to={account.role === "company" ? "/dashboard" : "/profile"}
            className="text-right block px-4 py-2 mt-2 text-gray-800 hover:font-medium"
          >
            <div className="flex flex-row">
              <img className="w-4 mr-2" src={Profile} alt="" />
              <div className="">
                {account.role === "company" ? "Moj Dashboard" : "Moj Profil"}
              </div>
            </div>
          </Link>
          {account.role === "company" && (
            <Link
              to="/company-notification"
              className="text-right block px-4 py-2 text-gray-800 cursor-pointer hover:font-medium"
            >
              <div className="flex flex-row">
                <img className="w-4 mr-2" src={NotificationImg} alt="" />
                <div>Pošalji obavijest</div>
              </div>
            </Link>
          )}
          <div
            onClick={handleLogout}
            className="text-right block px-4 py-2 text-gray-800 cursor-pointer hover:font-medium"
          >
            <div className="flex flex-row">
              <img className="w-4 mr-2" src={SignOut} alt="" />
              <div>Odjavi se</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const navbarButton = isAuthenticated ? accountButton : loginButton;

  return (
    <div
      className={`flex px-6 lg:px-16 py-4 fixed w-full top-0 z-40 bg-white justify-between items-center ${
        !top && "shadow-md"
      }`}
    >
      <Link to={"/"} className="flex items-center flex-none">
        <img src={LogoFull} alt="" className="h-10 hidden lg:block" />
        <img src={LogoShort} alt="" className="h-10 lg:hidden" />
      </Link>
      {showSearch ? (
        <div className="flex items-center space-x-4 flex-grow ml-5">
          <form className="relative flex-grow">
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
              placeholder="Pretraži firme..."
              className="w-32 lg:w-48 text-4 pl-12 outline-none pr-6 py-2 border-2 border-gray-300 rounded-full focus:ring-2 focus:border-transparent bg-white text-base transition-all duration-500 ease-in-out focus:w-full"
            />
            <img
              src={Search}
              alt="Search"
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
            />
          </form>
          {showLink && <div>{navbarButton}</div>}
        </div>
      ) : (
        <div className="flex items-center space-x-4 ml-auto">
          {!isAuthenticated && (
            <div className="hidden lg:flex lg:mr-20 gap-5">
              <Link to="/search" className="font-semibold hover:underline">
                Istraži firme
              </Link>
              <Link to="/about-us" className="font-semibold hover:underline">
                O nama
              </Link>
              <Link to="/contact" className="font-semibold hover:underline">
                Kontakt
              </Link>
            </div>
          )}
          {showLink && <div>{navbarButton}</div>}
        </div>
      )}
    </div>
  );
}
