import React from 'react'
import {Link} from "react-router-dom";
import LogoFull from "../assets/logo-full.svg";

function Navbar() {
  return (
    <div className="px-5 py-4 shadow-md">
        <Link to={"/"}>
            <img src={LogoFull} alt=""/>
        </Link>
    </div>


  )
}

export default Navbar
