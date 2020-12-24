import logo from "./logo.svg";
import "./App.css";
import NewHeader from "./components/NewHeader";

function App() {
  return (
    <div className="App">
      <NewHeader />
      <header className="App-header">
        <div className="logo-trigger">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
