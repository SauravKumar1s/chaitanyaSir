import React from "react";
import step1 from "../home/img/1.svg"

const UploadCardMain = () => {
  return (
    <>
    <div className="text-3xl  text-center mb-16">
    3 Easy Steps to Order
    </div>
      <div className="flex justify-center ">
        <div className="rounded-lg bg-white shadow-lg  border border-gray-200 md:max-w-5xl pb-4">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row   ">
              <img
                className=" w-full h-screen md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg mt-6"
                src="https://qnqhealthcare.com/images/prescriptions.webp"
                alt=""
              />

              <div className="p-6 flex flex-row justify-start gap-10">
                <div className="w-150% h-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center">
                    <a href="#">
                      <img
                        className=" w-32 mt-4 rounded-lg"
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
                <div className="w-150% h-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center">
                    <a href="#">
                      <img
                        className=" w-32 mt-4 rounded-lg"
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
                <div className="w-150% h-11/12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-center">
                    <a href="#">
                      <img
                        className="rounded-lg w-32 mt-4"
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
          <div className="flex justify-center ml-24">
            <a
              href="#"
              className=" w-24 rounded-full bg-btn-ylw px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring active:bg-btn-ylw sm:w-auto"
            >
             Upload Prescription Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCardMain;
