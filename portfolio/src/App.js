import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CircularNavigationDrawer from "./components/CircularNavigationDrawer/CircularNavigationDrawer";

import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skill from "./sections/Skill/Skill";
import Contact from "./sections/Contact/Contact";

import useDetectScroll from "@smakss/react-scroll-direction";

import "./App.css";

function App() {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollDir = useDetectScroll({});
  useEffect(() => {
    if (scrollDir === "up") {
      setIsScrolling(false);
    } else setIsScrolling(true);
  }, [scrollDir]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  const hiddenLeftElements = document.querySelectorAll(".hidden-left");
  hiddenElements.forEach((el) => observer.observe(el));
  hiddenLeftElements.forEach((el) => observer.observe(el));

  return (
    <div className="App">
      <Navbar />
      <CircularNavigationDrawer isScrolling={isScrolling} />
      <Home />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
