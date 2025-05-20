"use client";
import React, { useState } from "react";
import Mobilenav from "./Mobilenav";
import Nav from "./Nav";

const Responsivenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handShowNav = () => setIsOpen(true);
  const handCloseNav = () => setIsOpen(false);
  return (
    <div>
      <Nav showNav={handShowNav} />
      <Mobilenav isOpen={isOpen} closeNav={handCloseNav} />
    </div>
  );
};

export default Responsivenav;
