import React, { useRef, useEffect } from "react";
import "../components/journey/journey.css";

// router
import { Link } from "react-router-dom";

import JourneyComponent from "../components/journey/JourneyComponent";

const Journey = () => {
  return (
    <div className="about-me">
      <Link to="/">
        <nav>Home</nav>
      </Link>
      <h3>My Journey</h3>

      <JourneyComponent />
    </div>
  );
};

export default Journey;
