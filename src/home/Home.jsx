import React from "react";
import Slider from "../slider/Slider";
import AboutHome from "./AboutHome";
import Hero from "./Hero";
import ImgCard from "./ImgCard";
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
      <ImgCard />
      <Search />
    </>
  );
};

export default Home;
