import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="section section-footer">
      <div className="container grid grid-four-column">
        <div className="f-about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            reprehenderit asperiores sed co.
          </p>
        </div>
        <div className="f-links">
          <h3>Links</h3>
          <ul>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">home</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">home</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">home</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">home</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">home</Link>
            </li>
          </ul>
        </div>
        <div className="f-services">
          <h3>Services</h3>
          <ul>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">Sservice 1</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">Sservice 2</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">Sservice 3</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">Sservice 4</Link>
            </li>
            <li>
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
              <Link to="/">Sservice 5</Link>
            </li>
          </ul>
        </div>
        <div className="f-address">
          <h3>Have a questions</h3>
          <address>
            <div>
              <p>
                <span>
                  <ion-icon name="location-outline"></ion-icon>
                </span>
                Karachi, Pakistan
              </p>
            </div>
            <div>
              <p>
                <span>
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <Link to="tel:+921234567">+92 1234567</Link>
              </p>
            </div>
            <div>
              <p>
                <span>
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <Link to="mailto:abc@email.com">abc@email.com</Link>
              </p>
            </div>
          </address>
        </div>
      </div>
      <div className="container">
        <div className="f-social-icons">
          <Link to="/" target="_blank">
            <ion-icon className="icons" name="logo-instagram"></ion-icon>
          </Link>
          <Link to="/" target="_blank">
            <ion-icon className="icons" name="logo-facebook"></ion-icon>
          </Link>
          <Link to="/" target="_blank">
            <ion-icon name="logo-youtube" className="icons"></ion-icon>
          </Link>
        </div>
        <div className="f-credit">
          <p>All copy rights reserved 2022.</p>
        </div>
      </div>
    </footer>
  );
};
