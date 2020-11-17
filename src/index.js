import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="container shadow-lg p-3 bg-white rounded">
      <form action="#" id="search-form">
        <div className="row mdl-3">
          <div className="col-6 city">
            <span id="city">Paris</span>,<span id="country">FR</span>
            <div className="date-time">
              <span id="date"></span>
              <span id="time"></span>
            </div>
          </div>
          <div className="col-5 input-group mb-3">
            <input
              type="search"
              className="form-control"
              autoComplete="off"
              placeholder="Search new city"
              id="city-input"
            />
            <div className="input-group-append mb-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-outline-secondary"
                id="button-addon2"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="row pl-3 pr-3">
        <div className="col">
          <div className="main-temp">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="Weather Icon"
              id="temp-icon"
            />
            <span id="temp">9</span>
            <span id="units">
              °C |{" "}
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
          <div className="details" id="description">
            Raining
          </div>
          <div className="details">
            <span>Humidity: </span>
            <span id="humidity">87</span>%
          </div>
          <div className="details">
            <span>Wind: </span>
            <span id="wind">13</span> kph
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
