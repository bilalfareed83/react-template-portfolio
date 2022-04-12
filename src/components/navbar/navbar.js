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
            <Link to="/about" className="navbar-link about-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/service" className="navbar-link services-link">
              Services
            </Link>
          </li>
          <li>
            <a href="#portfolio" className="navbar-link portfolio-link">
              Portfolio
            </a>
          </li>
          <li>
            <Link to="contact" className="navbar-link contact-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
