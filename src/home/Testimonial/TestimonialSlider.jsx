import React, { useState } from 'react';
import Card from './Card';

const TestimonialSlider = ({ testimonials }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    const newIndex = currentCard === testimonials.length - 1 ? 0 : currentCard + 1;
    setCurrentCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = currentCard === 0 ? testimonials.length - 1 : currentCard - 1;
    setCurrentCard(newIndex);
  };

  return (
    <div className="slider">
      <div className="card-wrapper">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            name={testimonial.name}
            jobTitle={testimonial.jobTitle}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>
      <button className="prev-btn" onClick={prevCard}>
        &lt;
      </button>
      <button className="next-btn" onClick={nextCard}>
        &gt;
      </button>
    </div>
  );
};

export default TestimonialSlider;
