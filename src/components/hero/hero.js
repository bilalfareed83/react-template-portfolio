import React from "react";
import { Link } from "react-router-dom";
import researchImg from "../../images/research-pic.jpg";
import "./hero.css";

export const HeroComponent = () => {
  return (
    <>
      <section className="section-hero section">
        <div className="container grid grid-two-column">
          <div className="section-hero-data">
            <p className="hero-top-data">this is me</p>
            <h1 className="hero-heading">Collective</h1>
            <p className="hero-para">
              Conducting multidisciplinary research on social policy, economics,
              poverty, gender, health, and labour since 2001.
            </p>
            <div>
              <Link to="#" className="btn about-btn">
                About us
              </Link>
            </div>
          </div>
          <div className="section-hero-image">
            <img src={researchImg} alt="research" className="hero-images" />
          </div>
        </div>
      </section>
    </>
  );
};
