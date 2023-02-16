import React from "react";
import { cardbg } from "../data/data";

const ImgCard = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center mt-12 ">
        <div className=" flex  flex-wrap  items-center justify-center w-11/12 gap-10">
          {cardbg.map((e) => {
            return (
              <div className="relative check">
                <img src={e.imageUrl} className="rounded-3xl" />
                <div className="absolute flex justify-center items-start flex-col bottom-0 left-0 right-0 h-full gap-3  opacity-70 ">
                  <h3 className="md:text-base text-base text-black font-semibold md:ml-12 ml-6">
                    {e.title}
                  </h3>
                  <h3 className="md:text-3xl text-base text-black font-bold md:ml-12 ml-6">
                    {e.title2}
                  </h3>

                  <a
                    href="#"
                    className="md:ml-12 ml-6 block  rounded-full bg-rose-600 md:px-12 md:py-3 px-5 py-2 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImgCard;
