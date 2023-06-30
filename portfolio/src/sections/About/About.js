import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="#about">
      <div className="about-heading">experience.</div>
      <div className="about-text">
        I am a{" "}
        <span className="about-text-decoration">
          software engineer at I'm Beside You Inc
        </span>
        , a Japan-based startup, I have gained valuable experience since joining
        as a full-time employee in July 2022. I have successfully taken on
        various roles, including frontend and backend development, data
        engineering, and in DevOps. I hold a{" "}
        <span className="about-text-decoration">
          bachelor's degree from IIT (ISM) Dhanbad.
        </span>{" "}
        Beyond my professional pursuits, I find enjoyment in swimming, going to
        the gym, and rock climbing.
      </div>
      <div className="about-list">
        <ul>
          <li>
            <div className="about-list-heading">
              Software Engineer, I’m Beside You Inc
            </div>
            <div className="about-list-sub-heading">July 2022 - Present</div>
            <div className="about-list-text">
              Developed video analytics, collaboration enhancing and mental
              health solutions. Currently developing a therapist matching
              solution using web3 technology. Collaborated with external teams,
              integrated third-party solutions, and optimised system
              performance.
            </div>
          </li>
          <li>
            <div className="about-list-heading">
              Software Engineer (Intern), I’m Beside You Inc
            </div>
            <div className="about-list-sub-heading">July 2021 - June 2022</div>
            <div className="about-list-text">
              Contributed to the system design , utilized the serverless
              framework for API development, React for frontend development and
              used various AWS serivces for the development of an edtech
              product. Set up the CI/CD pipeline , Infrastructure code and
              authentication feature. Supported team members in setting the
              development environments.
            </div>
          </li>
          <li>
            <div className="about-list-heading">
              Web Engineer (Intern), I’m Beside You Inc
            </div>
            <div className="about-list-sub-heading">May 2021 - June 2021</div>
            <div className="about-list-text">
              Played a pivotal role in the development of a key company project.
              Handled the state and API logic, ensuring seamless data
              management. Refactored the codebase and improved the website's
              performance by 10%.
            </div>
          </li>
          <li>
            <div className="about-list-heading">
              Full Stack Development (Intern), Techverse
            </div>
            <div className="about-list-sub-heading">Aug 2020 - Dec 2020</div>
            <div className="about-list-text">
              Designed and developed the company website, deployed it on AWS,
              and implemented the authentication feature for the mobile app.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
