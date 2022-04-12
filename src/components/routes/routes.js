import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/about";
import Home from "../../pages/home";
import { Services } from "../../pages/services";
import { HeroComponent } from "../hero/hero";
import { Navbar } from "../navbar/navbar";
export const RoutesComponent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </>
  );
};
