import React, { useState } from 'react'
import './WeatherApp.css'

import { Search } from '@mui/icons-material'
import cloud_icon from "../../../assets/cloud.png"
import humidity_icon from "../../../assets/humidity.png"
import wind_icon from "../../../assets/wind.png"
import clear_icon from "../../../assets/clear.png"
import drizzle_icon from "../../../assets/drizzle.png"
import rain_icon from "../../../assets/rain.png"

const WeatherApp = () => {

    let api_key = "c10367f4acf4faa8108779ce719c22d0"

    const [wIcon, setWIcon] = useState(cloud_icon)
    const [isLoading, setIsLoading] = useState(false);

    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temprature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")
    const element = document.getElementsByClassName("cityInput")

    let drizzWeather = ["03d", "03n", "04d", "04n"];
    let rainWeather = ["09d", "09n", "10d", "10n"];

    const search = async () => {

        if (element[0].value === "") {
            return 0;
        }
        setIsLoading(true);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
        let response = await fetch(url);
        let data = await response.json();

        setIsLoading(false)


        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temprature[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWIcon(clear_icon)
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWIcon(cloud_icon)
        } else if (drizzWeather.includes(data.weather[0].icon)) {
            setWIcon(drizzle_icon)
        } else if (rainWeather.includes(data.weather[0].icon)) {
            setWIcon(rain_icon)
        } else {
            setWIcon(clear_icon)
        }
    }

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search' />
                <div className="search-icon" onClick={search}>
                    <Search />
                </div>
            </div>
            {isLoading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : null}
            <div className="weather-image">
                <img src={cloud_icon} alt='' />
            </div>
            <h1 className="weather-temp">24°C</h1>
            <h2 className="weather-location">London</h2>
            <div className="data-weather">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
