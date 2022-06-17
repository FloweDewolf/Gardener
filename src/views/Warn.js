import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFormValue, clearForm, initWarnings } from 'slices/warningsSlice'

import { InputWrapper, StyledButton, StyledForm } from './Warn.styles'

const Warn = () => {
  const warnings = useSelector((state) => state.warnings.value)
  const dispatch = useDispatch()

  const handleSubmitInWarn = (e) => {
    e.preventDefault()
    dispatch(initWarnings(e.target.value))
    dispatch(clearForm())
  }

  const handleChangeInWarn = ({ target }) => {
    dispatch(changeFormValue({ id: target.id, value: target.value }))
  }

  return (
    <StyledForm onSubmit={handleSubmitInWarn}>
      <InputWrapper>
        <input
          onChange={handleChangeInWarn}
          value={warnings.formValues.title}
          id="title"
          type="text"
          className="input"
          placeholder=" "
        />
        <label htmlFor="title" className="label">
          Title
        </label>
      </InputWrapper>
      <InputWrapper>
        <input
          onChange={handleChangeInWarn}
          value={warnings.formValues.message}
          id="message"
          type="text"
          className="input"
          placeholder=" "
        />
        <label htmlFor="message" className="label">
          Message
        </label>
      </InputWrapper>
      <StyledButton type="submit">ADD</StyledButton>
    </StyledForm>
  )
}

export default Warn
