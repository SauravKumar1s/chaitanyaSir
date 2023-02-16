import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineShoppingCart,
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
      <div className="container flex sm:flex-col flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row w-11/12">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-black select-none">
              Logo<span className="text-indigo-">.</span>
            </span>
          </a>
        </div>

        <div className="flex items-center lg:ml-16">
          <ul className="flex sm:flex-row items-center justify-center flex-row lg:flex-row list-none sm:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#pablo"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  text-xl uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#pablo"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center  text-xl uppercase font-bold leading-snug text-black hover:opacity-75"
                href="#pablo"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className="overflow-hidden z-0 rounded relative ">
            <form role="form" className="sm:relative flex z-50 bg-gray-300 ">
              <input
                type="text"
                placeholder="enter your search here"
                className="rounded flex-1 px-4 py-2 bg-gray-300 text-gray-700 focus:outline-none"
              />
              <button className=" text-black  font-semibold px-8 py-4 focus:outline-none">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
        <div className="inline-flex items-center  space-x-2 ml-5 lg:justify-end text-xl text-white">
          <div className="flex items-center sm:mr-12 sm:mt-0 mt-5">
            <div className="mr-2 text-gray-500 bg-slate-300 p-2 rounded-sm cursor-pointer">
              {" "}
              <CgProfile />
            </div>

            <div className="mr-2 text-gray-500 bg-slate-300 p-2 rounded-sm cursor-pointer">
              {" "}
              <MdOutlineFavoriteBorder />
            </div>
            <div className="mr-2 text-gray-500 bg-slate-300 p-2 rounded-sm cursor-pointer">
              {" "}
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>

        {/* <!-- Dropdown menu --> */}
      </div>
    </section>
  );
};

export default NavbarTop;
