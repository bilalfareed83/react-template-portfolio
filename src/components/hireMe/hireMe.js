import React from "react";
import { Link } from "react-router-dom";
import "./hire.css";

export const HireMe = () => {
  return (
    <section className="section section-hire">
      <div className="overlay"></div>
      <div className="container">
        <h2>
          I am <span>available</span> for freelancing
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui odio
          odit placeat laudantium.
        </p>
        <Link to="/" className="btn">
          Hire Me
        </Link>
      </div>
    </section>
  );
};
