import {Link} from "react-router-dom";
import LogoFull from "../assets/Logo_full.svg"
import LogoShort from "../assets/Logo_short.svg"
export default function Navbar() {
    return (
        <div className="px-5 py-4 shadow-md fixed w-full top-0 z-50 bg-white">
            <Link to={"/mentor"} className="w-fit">
                <img src={LogoFull} alt="" className="h-11 hidden lg:block"/>
                <img src={LogoShort} alt="" className="h-10 lg:hidden"/>
            </Link>
        </div>
    )
}
