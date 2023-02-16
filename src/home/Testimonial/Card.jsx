import React from 'react';

const Card = ({ name, jobTitle, image, testimonial }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{jobTitle}</h4>
      <p>{testimonial}</p>
    </div>
  );
};
export default Card