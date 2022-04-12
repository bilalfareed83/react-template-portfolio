import React from "react";
import "./counter.css";

export const Counter = () => {
  return (
    <section className="section section-work-data">
      <div className="container grid grid-four-column">
        <div>
          <h2 className="counter-numbers">2000</h2>
          <p>projects completed</p>
        </div>
        <div>
          <h2 className="counter-numbers">3000</h2>
          <p>publications completed</p>
        </div>
        <div>
          <h2 className="counter-numbers">5000</h2>
          <p>Seminars completed</p>
        </div>
        <div>
          <h2 className="counter-numbers">1000</h2>
          <p>Happy clients</p>
        </div>
      </div>
    </section>
  );
};
