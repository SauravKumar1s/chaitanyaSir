import React from "react";
import SvgFacebook from "../extra/SvgFacebook";

const Register = () => {
  return (
    <div className="flex items-center  p-4 bg-gray-100 justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 sm:max-w-screen-sm w-screen">
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-rose-600">
            Account Register
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label for="name" className="text-sm font-semibold text-gray-500">
                Enter Your Name
              </label>
              <input
                type="name"
                id="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                for="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                autofocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white bg-rose-600 md:px-12 md:py-2   shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 transition-colors duration-300  rounded-md  focus:ring-blue-200 "
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-400 w-14"></span>
                <span className="font-normal text-gray-500">
                  or Register with
                </span>
                <span className="h-px bg-gray-400 w-14"></span>
              </span>
              <div className="flex justify-center items-center flex-col space-y-4">
                <SvgFacebook />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
