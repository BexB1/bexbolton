import React from "react";
import Fact from "./Fact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron">
          <h1>Thanks for visiting</h1>
          <p>
            I'm currently in the process of rebuilding this site from scratch.
          </p>
          <p>Please check back soon!</p>
          <div className="signature">
            <p>- Bex</p>
            <em>23 June 2020</em>
          </div>
          <div className="footer">
            <a href="https://www.linkedin.com/in/bexbolton">
              <button className="cta">
                Check out my LinkedIn profile instead
              </button>
            </a>
            <Fact />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
