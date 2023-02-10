import React from "react";
import Slider from "../slider/Slider";
import AboutHome from "./AboutHome";
import Hero from "./Hero";
import ImgCard from "./ImgCard";
import ProcessCard from "./ProcessCard";
import Question from "./Question";
import Search from "./Search";

const Home = () => {
  return (
    <>

    <Hero/>
    <ProcessCard/>
    <ImgCard/>
    <Search/>
    {/* <AboutHome/>
    <Question/> */}

    </>
  )

};

export default Home;