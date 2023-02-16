import React, { useState } from "react";
import StartSvg from "../extra/StartSvg";

const testimonials = [
  {
    name: "John Doe",
    jobTitle: "CEO",
    image: "https://via.placeholder.com/150",
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Jane Smith",
    jobTitle: "Marketing Manager",
    image: "https://via.placeholder.com/150",
    testimonial:
      "Nulla molestie lectus at eros molestie, nec egestas diam semper.",
  },
  {
    name: "Bob Johnson",
    jobTitle: "Software Engineer",
    image: "https://via.placeholder.com/150",
    testimonial: "Vivamus vestibulum odio in nisi auctor eleifend.",
  },
  {
    name: "Sara Lee",
    jobTitle: "Graphic Designer",
    image: "https://via.placeholder.com/150",
    testimonial: "Phasellus sodales quam vitae commodo consectetur.",
  },
  {
    name: "David Chen",
    jobTitle: "Product Manager",
    image: "https://via.placeholder.com/150",
    testimonial:
      "Aliquam eu ipsum volutpat, ultrices sapien non, scelerisque est.",
  },
  {
    name: "Emily Davis",
    jobTitle: "Accountant",
    image: "https://via.placeholder.com/150",
    testimonial: "Morbi ultricies tellus vel ligula maximus varius.",
  },
];

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard(
      currentCard === testimonials.length - 3 ? 0 : currentCard + 1
    );
  };

  const prevCard = () => {
    setCurrentCard(
      currentCard === 0 ? testimonials.length - 3 : currentCard - 1
    );
  };

  return (

        <div className="container flex justify-center my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center w-11/12">
            <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
            <div className="mb-10">
              <button className="text-5xl" onClick={prevCard}>
                &lt;
              </button>
              <button className="text-5xl" onClick={nextCard}>
                &gt;
              </button>
            </div>{" "}
            <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
              {" "}
              {testimonials
                .slice(currentCard, currentCard + 3)
                .map((testimonial, index) => (
                  <div className="card" key={index}>
                    <div className="mb-12 md:mb-0">
                      <div className="flex justify-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full shadow-lg w-32"
                        />
                      </div>
                      <h5 className="text-lg font-bold mb-4">{testimonial.name}</h5>
                      <h6 className="font-medium text-blue-600 mb-4">
                        {testimonial.jobTitle}
                      </h6>
                      <p className="mb-4">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="quote-left"
                          className="w-6 pr-2 inline-block"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                          ></path>
                        </svg>
                        {testimonial.testimonial}
                      </p>
                      <ul className="flex justify-center mb-0">
                        <StartSvg />
                      </ul>
                    </div>
                  </div>
                ))}{" "}
            </div>
          </section>
        </div>
    
  );
};

export default CardSlider;
