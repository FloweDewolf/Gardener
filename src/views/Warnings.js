import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Warn from 'components/large/Warn'

const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.white};
  }
`

const Warnings = () => {
  return (
    <Container>
      <Routes>
        <Route path="/warn" element={<Warn />} />
      </Routes>
    </Container>
  )
}

export default Warnings
