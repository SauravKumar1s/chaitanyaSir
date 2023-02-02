import React, { useState } from "react";
import Svg from "../extra/Svg";

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
                  Services
                </a></div>
                <div className="mt-1">
                  <Svg/>
                </div></div>
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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
                <div className="absolute transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0s  right-6 top-8"></div>
                {/* <!-- Submenu starts --> */}
                <ul class="absolute bg-white p-3 w-52 top-10 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
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



            {/* <!-- Mobile menu icon --> */}
            <button id="mobile-icon" class="md:hidden">
              <i onclick="changeIcon(this)" class="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* <!-- Mobile menu --> */}
          <div class="md:hidden flex justify-center mt-3 w-full">
            <div id="mobile-menu" class="mobile-menu absolute top-23 w-full">
              <ul class="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="https://google.com" class="block pl-7">
                    Home
                  </a>
                </li>
                <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="#" class="block pl-7">
                    News
                  </a>
                </li>
                <li class="border-b-2 border-white hover:bg-red-400 hover:text-white">
                  <a href="#" class="block pl-11">
                    Services{" "}
                    <i class="fa-solid fa-chevron-down fa-2xs pt-4"></i>
                  </a>

                  {/* <!-- Submenu starts --> */}
                  <ul class="bg-white text-gray-800 w-full">
                    <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a class="block pl-16" href="#">
                        Webdesign
                      </a>
                    </li>
                    <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a class="block pl-16" href="#">
                        Digital marketing
                      </a>
                    </li>
                    <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a class="block pl-16" href="#">
                        SEO
                      </a>
                    </li>
                    <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a class="block pl-16" href="#">
                        Ad campaigns
                      </a>
                    </li>
                    <li class="text-sm leading-8 font-normal hover:bg-slate-200">
                      <a class="block pl-16" href="#">
                        UX Design
                      </a>
                    </li>
                  </ul>
                  {/* <!-- Submenu ends --> */}
                </li>
                <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="#" class="block pl-7">
                    About
                  </a>
                </li>
                <li class="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                  <a href="#" class="block pl-7">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </nav>
  );
};

export default Navbar1;
