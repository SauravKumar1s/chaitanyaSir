import React from "react";
import CardSlider from "./CardSlider";
import Hero from "./Hero";
import ImgCard from "./ImgCard";
import NumberCounter from "./NumberCounter";
import ProcessCard from "./ProcessCard";
import Search from "./Search";
import UploadCardMain from "./UploadCardMain";

const Home = () => {
  return (
    <>
      <Hero />
      <ProcessCard />
      <CardSlider />
      <UploadCardMain />
      <NumberCounter/>
      <ImgCard />
      <Search />
    </>
  );
};

export default Home;
