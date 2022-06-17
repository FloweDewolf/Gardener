import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Container = styled.div``

const Warnings = () => {
  const warnings = useSelector((state) => state.warnings.value)
  return (
    <Container>
      {warnings.warnings.map((warning) => (
        <div key={warning.id}>
          <p>title: {warning.title}</p>
          <p>message: {warning.message}</p>
          <p>id: {warning.id}</p>
          <br />
          <br />
          <br />
        </div>
      ))}
    </Container>
  )
}

export default Warnings
