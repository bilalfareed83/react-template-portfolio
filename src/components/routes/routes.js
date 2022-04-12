import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import { Navbar } from "../navbar/navbar";
export const RoutesComponent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};
