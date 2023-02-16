import React from "react";
import Slider from "../slider/Slider";
import AboutHome from "./AboutHome";
import Hero from "./Hero";
import ImgCard from "./ImgCard";
import NumberCounter from "./NumberCounter";
import ProcessCard from "./ProcessCard";
import Question from "./Question";
import Search from "./Search";
import Testimonials from "./Testimonials";
import UploadCardMain from "./UploadCardMain";

const Home = () => {
  return (
    <>
      <Hero />
      <ProcessCard />
      <Testimonials />
      <UploadCardMain />
      <NumberCounter/>
      <ImgCard />
      <Search />
    </>
  );
};

export default Home;
