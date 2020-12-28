import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Home from "./screens/Home.js";

function App() {
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
