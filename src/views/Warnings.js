import React from 'react'
import styled from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import Warn from 'components/large/Warn'

const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.white};
  }
`

const Links = styled.div`
  display: flex;

  a:not(:first-child) {
    margin-left: 50px;
  }
`

const Warnings = () => {
  return (
    <Container>
      <Links>
        <Link to="/home/warnings">/warnings</Link>
        <Link to="warn">/warn</Link>
      </Links>
      <Routes>
        <Route path="/warn" element={<Warn />} />
      </Routes>
    </Container>
  )
}

export default Warnings
