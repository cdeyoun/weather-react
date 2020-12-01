import React from "react"
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by <a href="https://www.linkedin.com/in/cassandradeyoung/" rel="noreferrer" target="_blank" >Cassie DeYoung</a> and is <a href="https://github.com/cdeyoun/weather-react" rel="noreferrer" target="_blank" >open-sourced on GitHub.</a>
        </footer>
      </div>
    </div>
  );
}