import { Link } from "react-router-dom";
import LogoFull from "../../assets/Logo_full.svg";
import LogoShort from "../../assets/Logo_short.svg";

export default function Navbar({ showLink }) {
  return (
    <div className="flex px-5 py-4 shadow-md fixed w-full top-0 z-40 bg-white">
      <Link to={"/"} className="w-fit flex flex-col">
        <img src={LogoFull} alt="" className="h-10 hidden lg:block" />
        <img src={LogoShort} alt="" className="h-10 lg:hidden" />
      </Link>
      {showLink && (
        <Link
          to={"/login"}
          className="ml-auto text-white text-base lg:text-md p-2 font-semibold bg-Primary rounded-md border-2 border-Swan"
        >
          Prijavi se
        </Link>
      )}
    </div>
  );
}
