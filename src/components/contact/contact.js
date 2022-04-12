import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <h2 className="common-heading">Contact Us</h2>
      </div>

      <div>
        <iframe
          className="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.932149518304!2d67.054859314401!3d24.866166851154127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8feda7c393%3A0x3baa4ebc68c1efb2!2sCollective%20for%20Social%20Science%20Research!5e0!3m2!1sen!2s!4v1649757040796!5m2!1sen!2s"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
