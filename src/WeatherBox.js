import React from 'react'

function WeatherBox(props) {
    return(
        <div className="weather-box">
            <div className="temp">
                {Math.round(props.temp)}°c
            </div>
            <div className="weather">
                {props.weather}
            </div>
        </div>
    )
}

export default WeatherBox