import React from "react";
import "./navbar.css";
import logo from "../../images/logo_collective.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} alt="cssr" />
      <nav className="navbar">
        <ul className="navbar-lists">
          <li>
            <Link to="/" className="navbar-link home-link">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="navbar-link about-link">
              About
            </a>
          </li>
          <li>
            <a href="#service" className="navbar-link services-link">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="navbar-link portfolio-link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar-link contact-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
