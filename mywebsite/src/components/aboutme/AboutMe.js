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
      <section>
        <a
          href="https://github.com/thereactgirl"
          target="_blank"
          rel="noreferrer"
        >
          projects
        </a>
      </section>

      <section>
        <a
          href="https://thereactgirl.medium.com/"
          target="blank"
          rel="noreferrer"
        >
          blog
        </a>
      </section>

      <section>
        <a href="mailto: thereactgirl@outlook.com">contact me</a>
      </section>
    </div>
  );
};

export default AboutMe;
