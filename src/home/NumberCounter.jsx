import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const NumberCounter = () => {
  const [countup, setCountup] = useState(false);
  return (
    <>
      <div
        className="h-11/12 pt-12 pb-12 mt-12"
        style={{
          backgroundImage: "url(https://qnqhealthcare.com/images/tablets.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ScrollTrigger
          onEnter={() => setCountup(true)}
          onExit={() => setCountup(false)}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center m-auto sm:h-48 h-80 md:gap-44 gap-12">
           
            <div className="flex flex-col justify-center items-center rounded  m-4">
              <h1 className="text-black text-3xl font-bold mb-2">
                {countup && (
                  <CountUp start={0} end={18057} duration={2} delay={0} />
                )}
              </h1>

              <h1 className="text-black text-xl">Happy Customers</h1>
            </div>
            <div className="flex flex-col justify-center items-center rounded  m-4">
              <h1 className="text-black text-3xl font-bold">
                {countup && (
                  <CountUp start={0} end={16} duration={2} delay={0} />
                )}
              </h1>

              <h1 className="text-black text-xl">Branches</h1>
            </div>
            <div className="flex flex-col justify-center items-center rounded  m-4">
              <h1 className="text-black text-3xl font-bold">
                {countup && (
                  <CountUp start={0} end={27} duration={2} delay={0} />
                )}
              </h1>

              <h1 className="text-black text-xl">Partner</h1>
            </div>
           
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

export default NumberCounter;
