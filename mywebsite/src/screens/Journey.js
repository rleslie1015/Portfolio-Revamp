import React, { useRef, useEffect } from "react";
import "../components/journey/journey.css";

// router
import { Link } from "react-router-dom";

import JourneyComponent from "../components/journey/JourneyComponent";

const Journey = () => {
  const anchor = document.querySelector("#journey");
  anchor && anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  return (
    <div id="journey" className="about-me">
      <Link to="/">
        <nav>Home</nav>
      </Link>
      <h3>My Journey</h3>

      <JourneyComponent />
    </div>
  );
};

export default Journey;
