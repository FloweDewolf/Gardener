import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  position: relative;

  label {
    position: absolute;
  }

  input {
    border: none;
    border-bottom: 1px solid white;
    background-color: transparent;
    outline: none;
  }
`

const Warn = () => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <InputWrapper>
        <label htmlFor="id">label</label>
        <input id="id" type="text" />
      </InputWrapper>
    </StyledForm>
  )
}

export default Warn
