import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// effects
import Typewriter from "typewriter-effect";

//components
import Home from "./screens/Home.js";
import AboutMe from "./components/aboutme/AboutMe";

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    console.log("aboutme");
  };

  return (
    <Router>
      <div className="App">
        <Home />

        <footer className="footer">
          <small>
            Pssstt! This site under construction. :) For my old portfolio
            checkout out{" "}
            <a className="App-link" href="https://leslierodriguez.dev/">
              leslierodriguez.dev
            </a>
          </small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
