import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Navigation from 'components/large/Navigation'

const Container = styled.div`
  height: 100vh;
  display: grid;
  flex-direction: column;
`

const Blob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${({ theme }) => theme.colors.dark};
  width: 50vmax;
  z-index: -2;
  animation: move 3s linear infinite;
  transform: scale(2.3);
  transform-origin: 50% 50%;

  @keyframes move {
    from {
      transform: scale(2.3) rotate(0deg);
    }

    to {
      transform: scale(2.3) rotate(360deg);
    }
  }
`

const MainTemplate = ({ children }) => {
  return (
    <Container>
      <Blob>
        <svg viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
        </svg>
      </Blob>
      <Navigation />
      {children}
    </Container>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainTemplate
