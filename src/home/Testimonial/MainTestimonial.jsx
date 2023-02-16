import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const testimonials = [
    {
      name: 'John Doe',
      jobTitle: 'CEO',
      image: 'https://via.placeholder.com/150',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Jane Smith',
      jobTitle: 'Marketing Manager',
      image: 'https://via.placeholder.com/150',
      testimonial: 'Nulla molestie lectus at eros molestie, nec egestas diam semper.'
    },
    {
      name: 'Bob Johnson',
      jobTitle: 'Software Engineer',
      image: 'https://via.placeholder.com/150',
      testimonial: 'Vivamus vestibulum odio in nisi auctor eleifend.'
    }
  ];
const MainTestimonial = () => {
  return (
    <>
    <TestimonialSlider testimonials={testimonials}/>
    </>
  )
}

export default MainTestimonial