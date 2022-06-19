import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  align-items: start;
  padding: 25px;
  margin: 100px 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 25px;
  font-size: 25px;
  animation: entry 0.3s ease-in-out;

  img {
    position: absolute;
    right: 0;
  }

  @keyframes entry {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

const Weather = () => {
  const weather = useSelector((state) => state.weather.value)
  console.log(weather)
  return (
    <Container>
      <h2>Weather in {weather.name}</h2>
      <p>Feels like {weather.main.feels_like}°C</p>
      <p>Min {weather.main.temp_min}°C</p>
      <p>Max {weather.main.temp_max}°C</p>
      <p>Pressure {weather.main.pressure} hPa</p>
      <p>Wind speed {weather.wind.speed * 3.6} km/h</p>
      <p>Humidity {weather.main.humidity}%</p>
      <img
        src={`http://openweathermap.org/img/wn/${`${String(
          weather.weather[0].icon
        ).slice(0, -1)}n`}@4x.png`}
        alt=""
      />
    </Container>
  )
}

export default Weather
