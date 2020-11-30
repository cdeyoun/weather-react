import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function search() {
        const apiKey="c6e524e805540ffde6b508e52263f991";
        let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input 
                            type="search" 
                            placeholder="Enter a city..." 
                            className="form-control"
                            autoFocus="on"
                            onChange={handleCityChange}></input>
                        </div>
                        <div className="col-3">
                            <input 
                            type="submit" 
                            value="Search" 
                            className="btn btn-primary w-100"></input>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
             </div>   
        );
    } else {
        search();
        return "Loading...";
    }
}