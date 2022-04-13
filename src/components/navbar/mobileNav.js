import React from "react";
import "./navbar.css";

export const MobileNav = ({ navToggle, navToggleFunc }) => {
  return (
    <div
      className={!navToggle ? "mobile-navbar-btn" : "mobile-navbar-btn active"}
    >
      <ion-icon
        name="menu-outline"
        id="menu"
        onClick={navToggleFunc}
      ></ion-icon>
      <ion-icon
        name="close-outline"
        id="cross"
        onClick={navToggleFunc}
      ></ion-icon>
    </div>
  );
};
