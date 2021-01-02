import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Home from "./screens/Home.js";
import Journey from "./screens/Journey.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Home />
        </Route>
        <Switch>
          <Route path="/journey">
            <Journey />
          </Route>
        </Switch>
        <footer className="footer">
          <small>
            Pssstt! This site under construction. :) For my old portfolio
            checkout out{" "}
            <a className="App-link" href="https://leslierodriguez.dev/">
              leslierodriguez.dev
            </a>{" "}
            Or click on projects to see my most current work.
          </small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
