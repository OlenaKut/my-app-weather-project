import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [weather, setWeather] = useState("");

  function showWeather(response) {
    setMessage(true);
    temperature = response.data.main.temp;
    setTemperature(Math.round(temperature));
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function submitCity(event) {
    event.preventDefault();
    let apiKey = "82914429dbcac50d79e072b0c73a8cb3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let mainWeather = (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app shadow">
          <form id="search-form" className="mb-3" onSubmit={submitCity}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="city-input"
                  onBlur={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-info text-white w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1 id="city">{city}</h1>
            <ul>
              <li>
                Last updated: <span id="date">14:01</span>
              </li>
              <li id="description">{weather.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="weather-icon"
                  id="icon"
                />
                <span id="currentTemperature">{weather.temperature}</span>
                <span className="degree"> °C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity:
                  <span id="humidity"> {weather.humidity}</span>%
                </li>
                <li>
                  Pressure:
                  <span id="pressure"> {weather.pressure}</span> mb
                </li>
                <li>
                  Wind:
                  <span id="wind"> {weather.wind} </span>
                  m/s
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/OlenaKut/Vanilla-Weather-App.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourse
          </a>
          , code by Olena Kutasevych
        </small>
      </div>
    </div>
  );
  if (message) {
    return mainWeather;
  } else {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app shadow">
            <form id="search-form" className="mb-3" onSubmit={submitCity}>
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    id="city-input"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-info text-white w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">{}</h1>
              <ul>
                <li>
                  Last updated: <span id="date">14:01</span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <img src="" alt="" className="weather-icon" id="icon" />
                  <span id="currentTemperature"></span>
                  <span className="degree"> °C</span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity:
                    <span id="humidity"></span>%
                  </li>
                  <li>
                    Pressure:
                    <span id="pressure"></span> mb
                  </li>
                  <li>
                    Wind:
                    <span id="wind"></span>
                    m/s
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/OlenaKut/my-app-weather-project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-sourse
            </a>
            , code by Olena Kutasevych
          </small>
        </div>
      </div>
    );
  }
}
