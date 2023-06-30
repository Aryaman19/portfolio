import React from "react";
import { ICONS, IMAGES } from "../../assets/assets";
import "./Home.css";

const Home = () => {
  const resume_link =
    "https://drive.google.com/file/d/1XHDD8bFxjuXRj4GIz1vT-MuoYpoYpGP0/view?usp=sharing";

  return (
    <div className="home" id="#home">
      <div className="home-text">
        <div className="home-text-sub-heading">Hello I'm Aryaman,</div>
        <div className="home-text-heading">Software</div>
        <div className="home-text-heading">Engineer</div>
        <div className="home-text-sub-heading">based in India</div>
        <div className="home-text-button">
          <div
            className="home-text-button-text centre"
            onClick={() => window.open(resume_link)}
          >
            Resume
          </div>
        </div>
      </div>
      <div className="home-image">
        <img
          className="home-image-profile"
          src={IMAGES.profile_pic}
          alt="profile"
        ></img>
        <img
          className="home-image-deco-1"
          src={ICONS.img_decoration_1}
          alt="decoration"
        ></img>
        <img
          className="home-image-deco-2"
          src={ICONS.img_decoration_2}
          alt="decoration"
        ></img>
      </div>
    </div>
  );
};

export default Home;
