import React from 'react';
import LogoFull from '../../assets/Logo_full.svg';
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 shadow-2xl border-t-2 border-Swan mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={LogoFull} className="w-52" alt="Logo" />
          <ul className="flex flex-wrap items-center p-2 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className='mr-4'>
              <Link to="/about-us" className="hover:underline mr-4 md:mr-6">O nama</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline mr-4 md:mr-6">Kontakt</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://Karijerko.com" className="hover:underline">Lopa™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
