import { Link } from "react-router-dom";
import LogoFull from "../../assets/Logo_full.svg";
import LogoShort from "../../assets/Logo_short.svg";
import {useSelector} from "react-redux";

export default function Navbar({ showLink }) {

    const loginButton =  <Link
        to={"/login"}
        className="text-white text-base lg:text-md p-2 font-semibold bg-Primary rounded-md border-2 border-Swan"
    >
        Prijavi se
    </Link>

    const { isAuthenticated, account } = useSelector(state => state.auth);

    console.log(account);

    const accountButton = <div className="w-11 h-11 border-2 border-gray-400 rounded-full cursor-pointer"></div>

    const navbarButton = isAuthenticated ? accountButton : loginButton;

  return (
    <div className="flex px-5 py-4 shadow-md fixed w-full top-0 z-40 bg-white justify-between">
      <Link to={"/"} className="w-fit flex flex-col">
        <img src={LogoFull} alt="" className="h-10 hidden lg:block" />
        <img src={LogoShort} alt="" className="h-10 lg:hidden" />
      </Link>
      {showLink && navbarButton}
    </div>
  );
}
