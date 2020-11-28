import React from "react"
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <button className="btn">
          Hello
        </button>
        <footer>
          This project was coded by Cassie DeYoung and is open-sourced on GitHub.
        </footer>
      </div>
    </div>
  );
}