import React from "react";
import { ICONS } from "../../assets/assets";
import "./Navbar.css";

const instagram_link = "https://www.instagram.com/_aryaman_19/";
const linkedin_link = "https://www.linkedin.com/in/aryaman-kumar/";
const github_link = "https://github.com/Aryaman19";

const Navbar = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-name">Aryaman Kumar</div>
        <div className="navbar-menu">
          <span onClick={() => handleClickScroll("#home")}>About</span>
          <span onClick={() => handleClickScroll("#about")}>Experience</span>
          <span onClick={() => handleClickScroll("#skills")}>Skills</span>
        </div>
        <div className="navbar-links">
          <a href={github_link} target="_blank" rel="noreferrer">
            <img src={ICONS.github} alt="github" />
          </a>
          <a href={instagram_link} target="_blank" rel="noreferrer">
            <img src={ICONS.instagram} alt="instgram" />
          </a>
          <a href={linkedin_link} target="_blank" rel="noreferrer">
            <img src={ICONS.linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
