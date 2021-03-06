import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import image1 from "../../images/portfolio1.jpg";

export default function Testimonial() {
  const [swiperBox, setSwiperBox] = useState(false);
  const widthSize = window.matchMedia("(max-width: 780px)");
  const jQueryFun = (widthSize) =>
    widthSize.matches ? setSwiperBox(true) : setSwiperBox(false);
  widthSize.addEventListener("change", jQueryFun);

  return (
    <section className="section section-testimonial">
      <div className="container">
        <h2 className="common-heading">Happy client works</h2>

        <Swiper
          slidesPerView={!swiperBox ? 2 : 1}
          spaceBetween={30}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt quia dignissimos doloribus labore veniam soluta,
                officiis,
              </p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
              <figure>
                <img
                  src={image1}
                  alt="client"
                  className="client-img"
                  loading="lazy"
                />
              </figure>
              <div className="client-data-details">
                <p>Babaer Azam</p>
                <p>Enterpreneur</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
