import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 800px;
  width: 700px;
  justify-content: center;
  padding: 25px;
  margin: 100px 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 25px;
  font-size: 25px;
  animation: entry 0.3s ease-in-out;

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
  return (
    <Container>
      <h2>Weather</h2>
    </Container>
  )
}

export default Weather
