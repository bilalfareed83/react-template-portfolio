import React from "react";
import "./counter.css";
import CountUp from "react-countup";

export const Counter = () => {
  return (
    <section className="section section-work-data">
      <div className="container grid grid-four-column">
        <div>
          <h2 className="counter-numbers">
            <CountUp start={0} end={2000} duration={6}>
              2000
            </CountUp>
            +
          </h2>
          <p>projects completed</p>
        </div>
        <div>
          <h2 className="counter-numbers">
            <CountUp start={0} end={3000} duration={6}>
              3000
            </CountUp>
            +
          </h2>
          <p>publications completed</p>
        </div>
        <div>
          <h2 className="counter-numbers">
            <CountUp start={0} end={5000} duration={6}>
              5000
            </CountUp>
            +
          </h2>
          <p>Seminars completed</p>
        </div>
        <div>
          <h2 className="counter-numbers">
            <CountUp start={0} end={1000} duration={6}>
              1000
            </CountUp>
            +
          </h2>
          <p>Happy clients</p>
        </div>
      </div>
    </section>
  );
};
