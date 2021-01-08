import React, { useState } from 'react';

import WeatherBox from './WeatherBox'
import LocationBox from './LocationBox'
import ForecastBox from './ForecastBox'

const api = {
  key: "118e48b5d9f1e0a405ce6504902767fa",
  base: "https://api.openweathermap.org/data/2.5/",
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result)
          setQuery('');
          
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&appid=${api.key}`)
            .then(forecast => forecast.json())
            .then(forecast => {
              console.log(forecast);
              setForecast(forecast)
            })
          });
    }
  }

  const dateBuilder = (d) => {
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <LocationBox city={weather.name} country={weather.sys.country} dateBuilder={dateBuilder} />
          <WeatherBox temp={weather.main.temp} weather={weather.weather[0].main} />
          {typeof forecast.daily != "undefined" ? (<ForecastBox forecast={forecast} />) : ('')}
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
