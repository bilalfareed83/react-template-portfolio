import React from "react";
import "./bio.css";
import bioImage from "../../images/bio-image.jpg";
import { Link } from "react-router-dom";

export const BioData = () => {
  return (
    <section className="section-bio section">
      <div className="container grid grid-two-column">
        <div className="bio-image">
          <img src={bioImage} alt="bio-data" />
        </div>
        <div className="bio-data">
          <h2 className="common-heading">My Bio Data</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet velit
            voluptas qui voluptatum natus unde odit esse officia dolorem.
            Repellat nihil soluta voluptas,{" "}
          </p>
          <br />
          <p>consectetur mollitia perferendis aspernatur aut qui pariatur?</p>
          <div className="bio-data-stats">
            <div className="bio-stats">
              <h3>Design</h3>
              <div className="bio-progress-bar bio-progress-0">
                <span>80%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>HTML</h3>
              <div className="bio-progress-bar bio-progress-1">
                <span>90%</span>
              </div>
            </div>{" "}
            <div className="bio-stats">
              <h3>CSS</h3>
              <div className="bio-progress-bar bio-progress-2">
                <span>70%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>Javascript</h3>
              <div className="bio-progress-bar bio-progress-3">
                <span>70%</span>
              </div>
            </div>
            <div className="bio-stats">
              <h3>Mern</h3>
              <div className="bio-progress-bar bio-progress-4">
                <span>70%</span>
              </div>
            </div>
          </div>
          <div className="bio-data-btn">
            <Link to="#" className="btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
