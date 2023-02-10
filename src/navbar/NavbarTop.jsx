import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import Svg from "../extra/Svg";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineShoppingCart

} from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  const navigateToLogin = () => {
    navigate("/");
  };

  return (
    // <!-- component -->
    <section className="w-full  text-gray-700  bg-white border-b border-gray-200">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row w-11/12">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-black select-none">
              Logolsjfdklj<span className="text-indigo-">.</span>
            </span>
          </a>
        </div>

        <div className="flex items-center ml-16">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#pablo"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center  text-xl uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#pablo"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center  text-xl uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#pablo"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>


            
          </div>
        
        <div class="relative  w-2/4 sm:max-w-xl sm:mx-auto">
          
          <div class="overflow-hidden z-0 rounded relative ">
            <form role="form" class="relative flex z-50 bg-gray-300 ">
              <input
                type="text"
                placeholder="enter your search here"
                class="rounded flex-1 px-4 py-2 bg-gray-300 text-gray-700 focus:outline-none"
              />
              <button class=" text-black  font-semibold px-8 py-4 focus:outline-none">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="inline-flex items-center  space-x-2 ml-5 lg:justify-end text-xl text-white">
          <div className="flex items-center mr-12">
            <div className="mr-2 text-gray-500 bg-slate-300 p-2 rounded-sm">
              {" "}
              <CgProfile />
            </div>
           
            <div className="mr-2 text-gray-500 bg-slate-300 p-2 rounded-sm">
              {" "}
              <MdOutlineFavoriteBorder />
            </div>
            <div className="mr-2 text-gray-500 bg-slate-300 p-2 rounded-sm">
              {" "}
              <AiOutlineShoppingCart />
            </div>

          </div>
     
        </div>

        {/* <!-- Dropdown menu --> */}
        <div
          id="userDropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="avatarButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarTop;
