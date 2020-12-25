import logo from "./logo.svg";
import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <div className="leslie">
        <h1>Leslie Rodriguez</h1>
      </div>
      <header className="typewriter-container">
        <div className="logo-wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
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
      </header>
    </div>
  );
}

export default App;
