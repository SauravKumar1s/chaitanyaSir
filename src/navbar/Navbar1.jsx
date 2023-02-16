import React, { useState } from "react";
import Svg from "../extra/Svg";
import { AiFillInstagram, AiOutlineDown } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import { Transition } from "@headlessui/react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { BsWhatsapp, BsFillShareFill } from "react-icons/bs";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(1);


  return (
    <>
      <header class="  bg-white ">
        <nav class="relative px-2 py-4 z-30 shadow-lg">
          <div class="container mx-auto flex justify-center items-center">
            <ul class="hidden lg:flex space-x-10">
              <li class="flex relative group">
                <div className="flex items-start">
                  <div>
                    <a href="#" class="mr-1">
                      Home
                    </a>
                  </div>
                  <div className="mt-1">
                    <Svg />
                  </div>
                </div>
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
                    </a>
                  </div>
                  <div className="mt-1">
                    <Svg />
                  </div>
                </div>
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
                    </a>
                  </div>
                  <div className="mt-1">
                    <Svg />
                  </div>
                </div>
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
                    </a>
                  </div>
                  <div className="mt-1">
                    <Svg />
                  </div>
                </div>
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
                    </a>
                  </div>
                  <div className="mt-1">
                    <Svg />
                  </div>
                </div>
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
                    </a>
                  </div>
                  <div className="mt-1">
                    <Svg />
                  </div>
                </div>
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
          <ul className="absolute right-10  lg:invisible visible justify-end">
            <div className="lg:hidden flex justify-end absolute -top-5 -right-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="inline-flex items-center p-2  text-xl text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <HiMenu className="text-black text-xl" />
                ) : (
                  <ImCross className="text-black" />
                )}
              </button>
            </div>
          </ul>
        </nav>

        {/* <!-- Mobile menu --> */}

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className=" bg-black w-screen text-white   mt-6"
              id="mobile-menu"
            >
              <div className="h-screen  p-5 ">
                <div className="flex ">
                  <div className="  pt-24 font-medium">
                    <details className="group mb-10">
                      <summary className="flex  items-center  cursor-pointer list-none">
                        <span className="text-xl sm:ml-20  "> Home</span>
                        <span className="transition group-open:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </summary>
                      <div className="flex flex-col ">
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                      </div>
                    </details>
                    <details className="group mb-10">
                      <summary className="flex  items-center  cursor-pointer list-none">
                        <span className="text-xl sm:ml-20  "> Service</span>
                        <span className="transition group-open:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </summary>
                      <div className="flex flex-col ">
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                      </div>
                    </details>
                    <details className="group mb-10">
                      <summary className="flex  items-center  cursor-pointer list-none">
                        <span className="text-xl sm:ml-20  "> About</span>
                        <span className="transition group-open:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </summary>
                      <div className="flex flex-col ">
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                      </div>
                    </details>

                    <details className="group mb-10">
                      <summary className="flex  items-center  cursor-pointer list-none">
                        <span className="text-xl sm:ml-20  "> Contact </span>
                        <span className="transition group-open:rotate-180">
                          <AiOutlineDown />
                        </span>
                      </summary>
                      <div className="flex flex-col ">
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                        <a
                          href=""
                          className="text-white sm:ml-20 text-xl mt-8 group-open:animate-fadeIn"
                        >
                          Bitcoin
                        </a>
                      </div>
                    </details>
                  </div>
                </div>
                <div className="flex justify-center flex-wrap gap-5 mt-10">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 border-2 border-border-clr hover:border-btn-clr font-medium text-sm leading-snug uppercase bg-btn-clr rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="flex justify-center items-center">
                      <FiMail className="text-xl mr-4" />
                      E-mail
                    </div>
                  </button>
                  <button
                    type="button"
                    className="inline-block px-7 py-3 border-2 border-border-clr hover:border-btn-clr font-medium text-sm leading-snug uppercase bg-btn-clr rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="flex justify-center items-center">
                      <FiPhoneCall className="text-xl mr-4" />
                      Contact
                    </div>
                  </button>
                  <button
                    type="button"
                    className="inline-block px-7 py-3 border-2 border-border-clr hover:border-btn-clr font-medium text-sm leading-snug uppercase bg-btn-clr rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <div className="flex justify-center items-center">
                      <BsWhatsapp className="text-xl mr-4" />
                      Whatsapp
                    </div>
                  </button>
                </div>
               
              </div>
            </div>
          )}
        </Transition>
      </header>
    </>
  );
};

export default Navbar1;
