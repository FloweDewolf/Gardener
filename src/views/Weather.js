import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from 'slices/locationReducer'
import { useNavigate } from 'react-router-dom'

import { Container, SearchWrapper } from './Weather.styles'

const Weather = () => {
  const weather = useSelector((state) => state.weather.value)
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const API_KEY = process.env.REACT_APP_WEATHER_API
    const API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        const { lat, lon } = res[0]
        dispatch(setLocation({ lat, lon }))
      })

    setCity('')
  }

  const handleChangeInWeather = (e) => {
    setCity(e.target.value)
  }

  try {
    return (
      <Container>
        <SearchWrapper>
          <h2>Weather in</h2>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                placeholder={weather.name}
                type="text"
                onChange={handleChangeInWeather}
                value={city}
              />
              <button type="submit">🔍</button>
            </form>
          </div>
        </SearchWrapper>
        <p>Feels like {Math.floor(weather.main.feels_like)}°C</p>
        <p>Min {Math.floor(weather.main.temp_min)}°C</p>
        <p>Max {Math.floor(weather.main.temp_max)}°C</p>
        <p>Pressure {weather.main.pressure} hPa</p>
        <p>Wind speed {Math.floor(weather.wind.speed * 3.6)} km/h</p>
        <p>Humidity {weather.main.humidity}%</p>
        <img
          src={`https://openweathermap.org/img/wn/${`${String(
            weather.weather[0].icon
          ).slice(0, -1)}n`}@4x.png`}
          alt=""
        />
      </Container>
    )
  } catch (err) {
    const navigate = useNavigate()
    return navigate('home')
  }
}

export default Weather
