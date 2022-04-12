import React from "react";
import "./service.css";

export const Service = () => {
  return (
    <section className="section section-service">
      <div className="container">
        <h2 className="common-heading">Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
          esse sit.{" "}
        </p>
      </div>
      <div className="container grid grid-three-column">
        <div className="service-box">
          <ion-icon
            name="desktop-outline"
            className="service-icon"
            id="service-icon"
          ></ion-icon>
          <h3>Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            esse sit
          </p>
        </div>
        <div className="service-box">
          <ion-icon
            name="camera-outline"
            className="service-icon"
            id="service-icon"
          ></ion-icon>
          <h3>Photography</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            esse sit
          </p>
        </div>
        <div className="service-box">
          <ion-icon
            name="film-outline"
            className="service-icon"
            id="service-icon"
          ></ion-icon>
          <h3>Films</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            esse sit
          </p>
        </div>
        <div className="service-box">
          <ion-icon
            name="documents-outline"
            className="service-icon"
            id="service-icon"
          ></ion-icon>
          <h3>Documentory</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            esse sit
          </p>
        </div>
        <div className="service-box">
          <ion-icon
            name="videocam-outline"
            className="service-icon"
            id="service-icon"
          ></ion-icon>
          <h3>Research</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            esse sit
          </p>
        </div>
        <div className="service-box">
          <ion-icon
            name="desktop-outline"
            className="service-icon"
            id="service-icon"
          ></ion-icon>
          <h3>Ads</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore
            esse sit
          </p>
        </div>
      </div>
    </section>
  );
};
