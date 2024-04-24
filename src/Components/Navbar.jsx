import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="px-5 py-4 shadow-md">
        <Link to={"/"}>
            <img src="../../public/logo-full.svg" alt=""/>
        </Link>
    </div>


  )
}

export default Navbar
