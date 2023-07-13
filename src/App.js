import logo from "./logo.svg";
import "./App.css";
import { createPortal } from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      {createPortal(
        <p>
          Edit <code>src/App.js</code> and save to reload. 1
        </p>,
        document.getElementById("another-root"), "another-root-1"
      )}
      {createPortal(
        <p>
          Edit <code>src/App.js</code> and save to reload. 2
        </p>,
        document.getElementById("another-root"), "another-root-2"
      )}
    </div>
  );
}

export default App;
