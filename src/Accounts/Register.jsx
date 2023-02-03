import React from 'react'

const Register = () => {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        className="p-4 py-6 text-white bg-header-clr md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div className="my-3 text-4xl font-bold tracking-wider text-center">
          <a href="#">Register page</a>
        </div>
        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit reiciendis numquam delectus aliquid.
        </p>
        <p className="flex flex-col items-center justify-center mt-10 text-center">
          <span>Don't have an account?</span>
          <a href="#" className="underline">Get Started!</a>
        </p>
        <p className="mt-6 text-sm text-center text-gray-300">
          Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
        </p>
      </div>
      <div className="p-5 bg-white md:flex-1">
        <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
        <form action="#" className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-1">
            <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              autofocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              autofocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              autofocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
            <input
              type="email"
              id="email"
              autofocus
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between">
              <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
              <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
            </div>
            <input
              type="password"
              id="password"
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
            />
            <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-header-clr rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Register
            </button>
          </div>
          <div className="flex flex-col space-y-5">
            <span className="flex items-center justify-center space-x-2">
              <span className="h-px bg-gray-400 w-14"></span>
              <span className="font-normal text-gray-500">or login with</span>
              <span className="h-px bg-gray-400 w-14"></span>
            </span>
            <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:white focus:outline-none "
                >
               
               
        <svg class="w-5 h-5 fill-current text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        <span>Facebook</span>

                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:white focus:outline-none "
                >
               
               
        <svg class="w-5 h-5 fill-current text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        <span>Facebook</span>

                </a>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register