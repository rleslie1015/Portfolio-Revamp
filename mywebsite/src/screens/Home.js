import logo from "../logo.svg";
import "../App.css";
import { useState } from "react";

// effects
import Typewriter from "typewriter-effect";

//components
import AboutMe from "../components/aboutme/AboutMe";

function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
    console.log("aboutme");
  };

  return (
    <div className="App">
      <div className="leslie">
        <h1>Leslie Rodriguez</h1>
      </div>
      <header>
        <div className="intro">
          <div className="typewriter-container" onClick={toggleAboutMe}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("Edit <code>src/App.js</code>")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .deleteAll()
                  .typeString(
                    'Hey there! <br> <a style="color: #61dafb; text-decoration: underline">About Me<a>'
                  )
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  });
              }}
            />
          </div>
        </div>
        <div className="logo-wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div>{showAboutMe ? <AboutMe /> : <div className="hidden" />}</div>
    </div>
  );
}

export default Home;
