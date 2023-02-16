import React, { useState } from "react";
import Svg from "../extra/Svg";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Navbar1 = () => {
  //change nav color wehn scrolling
  const [navBg, setNavBg] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeNavBg);
  return (
    <nav className={navBg ? "navbar active_bg" : "navbar"}>
    

      <header class="  bg-white ">
        <nav class="relative px-2 py-4 z-30 shadow-lg">
          <div class="container mx-auto flex justify-center items-center">
            <ul class="hidden md:flex space-x-10">
              <li class="flex relative group">
                <div className="flex items-start">
                <div>
                <a href="#" class="mr-1">
                  Home
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-header-clr border-b-8 border-x-transparent border-x-8 border-t-0s  right-12 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded">
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>

              <li class="flex relative group">
                <div className="flex items-start">
                <div>
                <a href="#" class="mr-1">
                About
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-header-clr border-b-8 border-x-transparent border-x-8 border-t-0s  right-12 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded">
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>


              <li class="flex relative group">
                <div className="flex items-start">
                <div>
                <a href="#" class="mr-1">
                Contact Us
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-header-clr border-b-8 border-x-transparent border-x-8 border-t-0s  right-12 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded">
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>

              <li class="flex relative group">
                <div className="flex items-start">
                <div>
                <a href="#" class="mr-1">
                Careers
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-header-clr border-b-8 border-x-transparent border-x-8 border-t-0s  right-12 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded">
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>


              <li class="flex relative group">
                <div className="flex items-start">
                <div>
                <a href="#" class="mr-1">
                  Services
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-header-clr border-b-8 border-x-transparent border-x-8 border-t-0s  right-12 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded">
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              <li class="flex relative group">
                <div className="flex items-start">
                <div>
                <a href="#" class="mr-1">
                Find a Pharmacy
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-header-clr border-b-8 border-x-transparent border-x-8 border-t-0s  right-12 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded">
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Webdesign</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Digital marketing</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">SEO</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">Ad campaigns</a>
                  </li>
                  <li class="text-sm hover:bg-slate-100 leading-8">
                    <a href="#">UX Design</a>
                  </li>
                </ul>
                {/* <!-- Submenu ends --> */}
              </li>
              
              </ul>

          </div>
        </nav>
      </header>
    </nav>
  );
};

export default Navbar1;
