import React, { useState } from 'react'
import './WeatherApp.css'
import '../ProjectContainer.css'
import { countriesCode } from '../../../portfolio'
import { Search } from '@mui/icons-material'
import cloud_icon from '../../../assets/cloud.png'
import humidity_icon from '../../../assets/humidity.png'
import wind_icon from '../../../assets/wind.png'
import clear_icon from '../../../assets/clear.png'
import drizzle_icon from '../../../assets/drizzle.png'
import rain_icon from '../../../assets/rain.png'
import snow_icon from '../../../assets/snow.png'

const WeatherApp = ({ project }) => {


    const [wIcon, setWIcon] = useState(cloud_icon)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const humidity = document.getElementsByClassName('humidity-percent')
    const wind = document.getElementsByClassName('wind-rate')
    const temprature = document.getElementsByClassName('weather-temp')
    const city = document.getElementsByClassName('city')
    const country = document.getElementsByClassName('country')
    const element = document.getElementsByClassName('cityInput')
    const represent = document.getElementsByClassName('represent-temp')

    let drizzWeather = ['03d', '03n', '04d', '04n'];
    let rainWeather = ['09d', '09n', '10d', '10n'];

    const search = async () => {
        setIsError(false)
        if (element[0].value === '') {
            return 0;
        }
        try {
            let api_key = 'c10367f4acf4faa8108779ce719c22d0'
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`

            setIsLoading(true);
            let response = await fetch(url);
            let data = await response.json();

            if (data) {
                humidity[0].innerHTML = data.main.humidity + '%';
                wind[0].innerHTML = data.wind.speed + 'km/h';
                let temp = data.main.temp;
                temprature[0].innerHTML = temp + '°C';
                city[0].innerHTML = data.name + ', ';
                const countryFullName = countriesCode[data.sys.country.toUpperCase()]
                country[0].innerHTML = countryFullName;

                let weatherIcon = data.weather[0].icon;

                if (weatherIcon === '01d' || weatherIcon === '01n') setWIcon(clear_icon)
                else if (weatherIcon === '02d' || weatherIcon === '02n') setWIcon(cloud_icon)
                else if (drizzWeather.includes(weatherIcon)) setWIcon(drizzle_icon)
                else if (rainWeather.includes(weatherIcon)) setWIcon(rain_icon)
                else if (weatherIcon === '13d' || weatherIcon === '13n') setWIcon(snow_icon)
                else setWIcon(clear_icon)

                if (temp < 0) represent[0].innerHTML = 'OMG, this is very 🥶';
                else if (temp <= 10) represent[0].innerHTML = 'Cold 😶‍🌫️';
                else if (temp <= 22) represent[0].innerHTML = 'Kinda Cool 😥';
                else if (temp <= 32) represent[0].innerHTML = 'So Warm 🥰';
                else if (temp <= 40) represent[0].innerHTML = 'Hot 😫';
                else represent[0].innerHTML = 'No Way 🥵';

                setIsLoading(false)
            }

        } catch (err) {
            console.log(err)
            setIsError(true)
            setIsLoading(false)
        }

    }

    return (
        <div className='project'>
            <h3>{project.name}</h3>
            <p className='project__description'>{project.description}</p>
            <div className='weather-container'>
                <div className='top-bar'>
                    <input type='text' className='cityInput' placeholder='Input City' />
                    <div className='search-icon' onClick={search}>
                        <Search />
                    </div>
                </div>
                {isError ? <div className='response-error'>Data not found :&#40;</div> : null}
                {isLoading ? <div className='lds-ellipsis'><div></div><div></div><div></div><div></div></div> : null}
                <div className='weather-image'>
                    <img src={wIcon} alt='' />
                </div>
                <h1 className='weather-temp'>35°C</h1>
                <div className='reaction-temp'>
                    <h4 className='represent-temp'>Hot 😫</h4>
                    <h5>in</h5>
                </div>
                <div className='weather-location'>
                    <span className='city'>Jakarta, </span>
                    <span className='country'>Indonesia</span>
                </div>
                <div className='data-weather'>
                    <div className='element'>
                        <img src={humidity_icon} alt='' className='icon' />
                        <div className='data'>
                            <div className='humidity-percent'>64%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={wind_icon} alt='' className='icon' />
                        <div className='data'>
                            <div className='wind-rate'>18 km/h</div>
                            <div className='text'>Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
