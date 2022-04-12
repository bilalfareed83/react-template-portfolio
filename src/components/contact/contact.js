import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="section section-contact">
      <div className="container">
        <h2 className="common-heading">Contact Us</h2>
      </div>
      <div className="section-contact-main contact-container">
        <form action="#">
          <div className="grid grid-two-column">
            <div>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input type="text" name="email" placeholder="email" id="email" />
            </div>
          </div>
          <div>
            <label htmlFor="subject"></label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="subject"
            />
          </div>
          <div>
            <label htmlFor="textarea"></label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="30"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              name="submit"
              id="submit"
              className="btn"
              value="Send message"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
