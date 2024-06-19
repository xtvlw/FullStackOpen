import { useState, useEffect } from "react"
import axios from "axios"

import WeatherIcon from "./WeatherIcon.jsx"

import "./_variables.style.css"

const Weather  = ({ capitalName, latitude, longitude }) => {

    const baseUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}1&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m&wind_speed_unit=ms`

    const [weatherData, setWeatherData] = useState({
        "current_units": {
            "temperature_2m": "°C",
            "wind_speed_10m": "m/s"
            },
        "current": {
            "temperature_2m": 0,
            "wind_speed_10m": 0
        }
    })


    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setWeatherData(res.data)
            })
    }, [])

    return (
        <>
            <h2>{capitalName}</h2>
            <p>Temperature: {weatherData.current.temperature_2m} {weatherData.current_units.temperature_2m}</p>
            <WeatherIcon current={weatherData.current} />
            <p>Wind: {weatherData.current.wind_speed_10m} {weatherData.current_units.wind_speed_10m}</p>
        </>
    )
}

export default Weather
