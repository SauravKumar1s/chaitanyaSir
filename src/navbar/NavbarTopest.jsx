import React from "react";



const NavbarTopest = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between  bg-white border-b border-gray-300">
      <div className="container mx-auto flex flex-wrap items-center justify-between w-11/12">
        <div className="w-full relative flex justify-between lg:w-auto   lg:static lg:block lg:justify-start">
          <div className="flex justify-center items-center ">
            <div className="text-black mr-4">facebook</div>

            <div className="text-black  mr-4 ">Twitter </div>
            <div className="text-black  "> pinterest </div>
          </div>
        
        </div>
        
        <div className="lg:flex flex-grow hidden items-center" id="example-navbar-warning">
        
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <a
            href="#"
            className="block sm:inline-block py-2 mr-6 text-gray-700  hover:text-gray-900"
          >
            Home
          </a>

          <a
            href="#"
            className="block sm:inline-block py-2 mr-6 text-gray-700  hover:text-gray-900"
          >
            About
          </a>

          <a
            href="#"
            className="block sm:inline-block py-2 mr-6 text-gray-700  hover:text-gray-900"
          >
            Blog
          </a>
          <a
            href="#"
            className="block sm:inline-block py-2 mr-6 text-red-500  hover:text-gray-900"
          >
            Need help? + 91 95977 06555
          </a>

      
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTopest;
