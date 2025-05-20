import React from "react";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import Variety from "./Variety/Variety";
import Chronicle from "./Chronicle/Chronicle";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Variety />
      <Chronicle />
    </div>
  );
};

export default Home;
