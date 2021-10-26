import React, { useState } from 'react';

const api = {
  key: process.env.OPENWEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = event => {
    if (event.key === "Enter") {
        fetchWeather()
    }
  }

  async function fetchWeather() {
    fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      if (result.cod === '400') {
        throw Error
      }
      setWeather(result)
      console.log(result)
    })
    .catch((err) => {
      console.log('Oops something broke. Check console log.')
    })
    .finally(() => {
      setQuery('')
    })
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];    

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App container">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} /> 
        </div>
        {(Object.keys(weather).length > 1) ? ( 
        <span> 
          <div className="weather-card">
              <div className="location-wrapper">
                <div className="city-name">
                  { weather.city.name}, {weather.city.country}
                </div>
                <div className="date">
                  { dateBuilder(new Date()) }
                </div>
              </div>
              <div className="main-weather-info">
                {/* <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} /> */}
                <div className="temp">
                  {/* { Math.round(weather.main.temp) }º */}
                </div>
                <div className="weather">
                  {/* { weather.weather[0].main } */}
                </div>
              </div>
              <div className="sub-weather-info">
                <h3 className="title"> Information </h3>
              </div>
            </div>
          </span>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
