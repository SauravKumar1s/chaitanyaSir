import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Svg from "../extra/Svg";

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
    <section className="w-full px-8 text-gray-700  bg-header-clr">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <span className="mx-auto text-xl font-black leading-none text-white select-none">
              Logo<span className="text-indigo-">.</span>
            </span>
          </a>
        </div>
        <div className="relative text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-4"
          ></button>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="#"
            onClick={navigateToRegister}
            className="text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            onClick={navigateToLogin}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            login
          </a>
          <img
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/sidharth-malhotra-exclusive_1-three_four.jpg?VersionId=WIxY27jOtO6dd6UrYdl8m4nTtjPTbcdx"
          alt="User dropdown"
        />
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
