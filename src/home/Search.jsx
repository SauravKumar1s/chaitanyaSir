import React from "react";

const Search = () => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center h-96 mt-10 bg-gray-100 w-full p-4 text-center  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className=" mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Get the news by subscribing to our newsletter. <br/> Tips directly!

        </h5>
       
        <div className="flex items-center justify-center ">
          <div className="flex border-2 border-gray-200 rounded">
            <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
