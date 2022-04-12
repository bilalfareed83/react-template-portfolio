import React, { useState } from "react";
import "./portfolio.css";
import image1 from "../../images/portfolio1.jpg";
import image2 from "../../images/portfolio2.jpg";
import image3 from "../../images/portfolio3.jpg";
import image4 from "../../images/portfolio4.jpg";
import image5 from "../../images/portfolio5.jpg";
import image6 from "../../images/portfolio6.jpg";
import image7 from "../../images/portfolio7.jpg";
import image8 from "../../images/portfolio8.jpg";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const [youtube, setYoutube] = useState(true);
  const [website, setWebsite] = useState(true);
  const [facebook, setFacebook] = useState(true);

  const data = [
    { images: image2, val: "project 1", link: "#", ref: youtube },
    { images: image2, val: "project 7", link: "#", ref: youtube },
    { images: image2, val: "project 8", link: "#", ref: youtube },
    { images: image2, val: "project 2", link: "#", ref: website },
    { images: image3, val: "project 3", link: "#", ref: website },
    { images: image4, val: "project 4", link: "#", ref: facebook },
    { images: image4, val: "project 5", link: "#", ref: facebook },
    { images: image6, val: "project 6", link: "#", ref: facebook },
  ];

  const clickedAnchorBotton = (e) => {
    let btn_num = e.target.dataset.btnNum;
    let img_active = `.p-btn--${btn_num}`;
    console.log(img_active);
    // .p-btn--1
  };

  return (
    <section className="section section-portfolio" id="portfolio">
      <div className="container">
        <h2 className="common-heading">Latest work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
          esse sit.{" "}
        </p>
      </div>
      <div className="p-btns" onClick={clickedAnchorBotton}>
        <div
          className={website ? "btn p-btn p-btn-active" : "btn p-btn"}
          data-btn-num="1"
          onClick={(e) => {
            return setWebsite(true), setFacebook(false), setYoutube(false);
          }}
        >
          Website
        </div>
        <div
          className={youtube ? "btn p-btn p-btn-active" : "btn p-btn"}
          data-btn-num="2"
          onClick={(e) => {
            return setWebsite(false), setFacebook(false), setYoutube(true);
          }}
        >
          Youtube
        </div>
        <div
          className={facebook ? "btn p-btn p-btn-active" : "btn p-btn"}
          data-btn-num="3"
          onClick={(e) => {
            return setWebsite(false), setFacebook(true), setYoutube(false);
          }}
        >
          Facbook
        </div>
      </div>
      <div className="container grid grid-three-column portfolio-images">
        {data.map((item, index) => {
          return (
            item.ref && (
              <div className="img-overlay p-btn--1" key={index}>
                <img src={item.images} alt={item.val} />
                <div className="overlay">
                  <Link to={item.link} className="common-heading">
                    {item.val}
                  </Link>
                </div>
              </div>
            )
          );
        })}
        {/* <div className="img-overlay p-btn--1">
          <img src={image2} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 2
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--2">
          <img src={image3} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 3
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--3">
          <img src={image4} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 4
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--3">
          <img src={image1} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 5
            </Link>
          </div>
        </div>
        <div className="img-overlay p-btn--3">
          <img src={image6} alt="portfolio" />
          <div className="overlay">
            <Link to="#" className="common-heading">
              Project 6
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};
