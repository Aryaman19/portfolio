import React, { useState } from "react";
import "./CircularNavigationDrawer.css";

const CircularNavigationDrawer = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="circular-navigation-drawer">
      <nav className="menu">
        <input
          type="checkbox"
          href="#"
          className="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label className="menu-open-button" htmlFor="menu-open">
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </label>

        <a
          href="#about"
          className="menu-item blue"
          onClick={() => handleClickScroll("#about")}
        >
          {" "}
          <i className="fa fa-user"></i>{" "}
        </a>
        <a
          href="#skills"
          className="menu-item green"
          onClick={() => handleClickScroll("#skills")}
        >
          {" "}
          <i className="fa fa-wrench"></i>
        </a>
        <a
          href="#home"
          className="menu-item red"
          onClick={() => handleClickScroll("#home")}
        >
          {" "}
          <i className="fa fa-home"></i>{" "}
        </a>
        {/* <a href="#" class="menu-item purple">
          {" "}
          <i class="fa fa-microphone"></i>{" "}
        </a>
        <a href="#" class="menu-item orange">
          {" "}
          <i class="fa fa-star"></i>{" "}
        </a>
        <a href="#" class="menu-item lightblue">
          {" "}
          <i class="fa fa-diamond"></i>{" "}
        </a> */}
      </nav>
    </div>
  );
};

export default CircularNavigationDrawer;
