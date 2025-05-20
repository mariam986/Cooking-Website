import React from "react";
import Hero from "./Hero/Hero";
import Newest from "./Newest/Newest";
import Basics from "./Basics/Basics";
import Nourishing from "./Nourishing/Nourishing";
import Tips from "./Tips/Tips";

const CookingTips = () => {
  return (
    <div>
      <Hero />
      <Newest />
      <Basics />
      <Nourishing />
      <Tips />
    </div>
  );
};

export default CookingTips;
