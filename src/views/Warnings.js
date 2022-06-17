import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Container = styled.div``

const Warnings = () => {
  const warnings = useSelector((state) => state.warnings.value)

  return (
    <Container>
      {warnings.warnings.map((warning) => (
        <p>
          {warning.title}
          {warning.message}
        </p>
      ))}
    </Container>
  )
}

export default Warnings
