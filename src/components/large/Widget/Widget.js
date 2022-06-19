import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWeather } from 'slices/weatherSlice'

import {
  Container,
  WidgetHandler,
  ContentContainer,
  MiniWeather,
} from './Widget.styles'

const Widget = () => {
  const dispatch = useDispatch()

  const location = useSelector((state) => state.location.value)
  const data = useSelector((state) => state.weather.value)

  const [isOpen, setIsOpen] = useState(false)

  const [time, setTime] = useState('')
  const [timeSession, setTimeSession] = useState('AM')

  const currentTime = () => {
    const date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    if (hh === 0) {
      hh = 12
    }
    if (hh > 12) {
      setTimeSession('PM')
      hh = Math.floor(date.getHours() / 12)
    }

    hh = hh < 10 ? `0${hh}` : hh
    mm = mm < 10 ? `0${mm}` : mm
    ss = ss < 10 ? `0${ss}` : ss

    setTime(`${hh}:${mm}:${ss}`)
  }

  useEffect(() => {
    ;(async () => {
      const API_KEY = '6c8ae35c71e4480ea962d024925725ff'
      const API = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`

      await fetch(API)
        .then((res) => res.json())
        .then((res) => {
          dispatch(setWeather(res))
        })
    })()
  }, [location.lat, location.lon])

  useEffect(() => {
    setInterval(() => currentTime(), 1000)
  }, [])

  return (
    <Container isOpen={isOpen}>
      <WidgetHandler onClick={() => setIsOpen((prevState) => !prevState)}>
        Info
      </WidgetHandler>
      <ContentContainer>
        <h1>
          <span>{time}</span>
          <span>{timeSession}</span>
        </h1>
        {data.main ? (
          <MiniWeather>
            <span>
              {`${data.name} ${Math.floor(data.main.temp)}°C ${
                data.weather[0].description
              }`}
            </span>
            <img
              src={`http://openweathermap.org/img/wn/${
                data.weather[0].description === 'clear sky'
                  ? '01n'
                  : data.weather[0].description === 'few clouds'
                  ? '02n'
                  : data.weather[0].description === 'scattered clouds'
                  ? '03n'
                  : data.weather[0].description === 'broken clouds'
                  ? '04n'
                  : data.weather[0].description === 'shower rain'
                  ? '09n'
                  : data.weather[0].description === 'rain'
                  ? '10n'
                  : data.weather[0].description === 'thunderstorm'
                  ? '11n'
                  : data.weather[0].description === 'snow'
                  ? '13n'
                  : data.weather[0].description === 'mist'
                  ? '50n'
                  : ''
              }@2x.png`}
              alt=""
            />
          </MiniWeather>
        ) : null}
      </ContentContainer>
    </Container>
  )
}

export default Widget
