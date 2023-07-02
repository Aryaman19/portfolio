import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skills" id="#skills">
      <div className="skills-heading">skills.</div>
      <div className="skills-text">
        <div>
          <b>Strong:</b> JavaScript, Python, AWS, React.js, MySql, Git, HTML/CSS
        </div>
        <div>
          <b>Intermediate:</b> TypeScript, Java, Linux, Docker, MongoDB,
          Node.js, Figma
        </div>
        <div>
          <b>Beginner:</b> Rust, C, C++, Solidity, Solana, Ethereum, Kubernetes,
          Webpack, Adobe XD HTML/CSS
        </div>
      </div>
    </div>
  );
};

export default Skill;
