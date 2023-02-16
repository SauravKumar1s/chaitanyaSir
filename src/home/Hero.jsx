import React, { useState, useEffect } from "react";

import "react-slideshow-image/dist/styles.css";

const Hero = () => {
  const images = [
    "https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7615467/pexels-photo-7615467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9259963/pexels-photo-9259963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9574332/pexels-photo-9574332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section
        className="relative -z-50 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="relative z-50 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl mb-16">
              Let us find your
              <strong className="block font-extrabold text-text-blue">
                Best us Medicine <span className="text-btn-ylw">.</span>
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded-full bg-btn-ylw px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring active:bg-btn-ylw sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded-full bg-btn-blue px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
