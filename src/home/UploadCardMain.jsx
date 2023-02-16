import React from "react";
import step1 from "../home/img/1.svg";


const UploadCardMain = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  return (
    <>
      <div className="text-3xl  text-center mb-16">3 Easy Steps to Order</div>
      <div className="flex justify-center ">
        <div className="rounded-lg bg-white sm:shadow-lg  border border-gray-200 md:max-w-5xl pb-4">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row   ">
              <img
                className=" w-full sm:h-screen md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg mt-6"
                src="https://qnqhealthcare.com/images/prescriptions.webp"
                alt=""
              />

              <div className="p-6 flex sm:flex-row flex-col  justify-start gap-10">
                <div className="sm:w-150%  h-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center">
                    <a href="#">
                      <img
                        className=" sm:w-32 w-24 mt-4 rounded-lg"
                        src={step1}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-center mt-10">
                    <a href="#">
                      <h5 className="mb-2 p-3 text-xl  tracking-tight text-gray-900 dark:text-white">
                        Upload Clear Prescription
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest
                    </p>
                  </div>
                </div>
                <div className="sm:w-150% h-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center">
                    <a href="#">
                      <img
                        className=" sm:w-32 w-24 mt-4 rounded-lg"
                        src={step1}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-center mt-10">
                    <a href="#">
                      <h5 className="mb-2 p-3 text-xl  tracking-tight text-gray-900 dark:text-white">
                        Upload Clear Prescription
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest
                    </p>
                  </div>
                </div>{" "}
                <div className="sm:w-150% h-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center">
                    <a href="#">
                      <img
                        className="sm:w-32 w-24 rounded-lg mt-4"
                        src={step1}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="text-center mt-10">
                    <a href="#">
                      <h5 className="mb-2 text-xl p-3  tracking-tight text-gray-900 dark:text-white">
                        Upload Clear Prescription
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:ml-24">
            <button
              className="  rounded-full bg-btn-ylw px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring active:bg-btn-ylw sm:w-auto"
              onClick={() => setShowModal(true)}
            >
              Upload Prescription Now
            </button>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-2/4">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Modal Title</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className="flex justify-center mt-8">
                          <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
                            <div className="m-4">
                              <label className="inline-block mb-2 text-gray-500">
                                File Upload
                              </label>
                              <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                  <div className="flex flex-col items-center justify-center pt-7">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                      />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                      Upload
                                    </p>
                                  </div>
                                  <input type="file" className="opacity-0" />
                                </label>
                              </div>
                            </div>
                            <div className="flex justify-center p-2">
                              <button className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">
                                Upload
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal2(true)}
                        >
                          Next
                        </button>
                        {showModal2 ? (
                          <>
                            {" "}
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-2/4  mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                  {/*header*/}
                                  <div className="flex items-start justify-between p-5 border-b border-solid  rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                      Modal Title
                                    </h3>
                                    <button
                                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                      // onClick={() => setShowModal(false)}
                                    ></button>
                                  </div>
                                  {/*body*/}
                                  <div className="relative p-16 flex-auto bg-gray-200">
                                    <div className="mt-5 md:mt-0 md:col-span-2">
                                      <form action="#" method="POST">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                          <div className="px-4 py-5 bg-white sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                              <div className="col-span-6 sm:col-span-3">
                                                <label
                                                  for="first_name"
                                                  className="block text-sm font-medium text-gray-700"
                                                >
                                                  First name
                                                </label>
                                                <input
                                                  type="text"
                                                  name="first_name"
                                                  id="first_name"
                                                  autocomplete="given-name"
                                                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                              </div>

                                              <div className="col-span-6 sm:col-span-3">
                                                <label
                                                  for="last_name"
                                                  className="block text-sm font-medium text-gray-700"
                                                >
                                                  Last name
                                                </label>
                                                <input
                                                  type="text"
                                                  name="last_name"
                                                  id="last_name"
                                                  autocomplete="family-name"
                                                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                              </div>

                                              <div className="col-span-6 sm:col-span-4">
                                                <label
                                                  for="email_address"
                                                  className="block text-sm font-medium text-gray-700"
                                                >
                                                  Email address
                                                </label>
                                                <input
                                                  type="text"
                                                  name="email_address"
                                                  id="email_address"
                                                  autocomplete="email"
                                                  className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                              type="submit"
                                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                              Save
                                            </button>
                                          </div> */}
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                  {/*footer*/}
                                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowModal2(false)}
                                    >
                                      Close
                                    </button>
                                    <button
                                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      // onClick={() => setShowModal(false)}
                                    >
                                      Save Changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCardMain;
