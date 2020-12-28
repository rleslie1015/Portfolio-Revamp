import "./AboutMe.css";
import React from "react";

import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h3>
        👋 Hello, my name is Leslie Rodriguez, I’m a Developer based in Texas
        and this is a selection of my personal and professional work.
      </h3>
      <Link to="/journey">
        <section>journey</section>
      </Link>
      <Link>
        <section>skills</section>
      </Link>
      <Link>
        <section>projects</section>
      </Link>
      <Link>
        <section>blog</section>
      </Link>
      <Link>
        <section>contact me</section>
      </Link>
    </div>
  );
};

export default AboutMe;
