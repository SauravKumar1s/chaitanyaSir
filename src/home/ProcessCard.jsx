import React from "react";
import { process } from "../data/data";
const ProcessCard = () => {
  return (
    <div className="flex justify-center mt-20 mb-20">
      <div className="flex  flex-wrap justify-center xl:gap-28 gap-20 w-11/12">
        {process.map((e) => {
          return (
            <figcaption class=" flex items-center justify-center space-x-2 ">
              <img className="w-20" src={e.imageUrl} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left w-full">
                <div className=" text-2xl">{e.title}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {e.title2}
                </div>
              </div>
            </figcaption>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessCard;
