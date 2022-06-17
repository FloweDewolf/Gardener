import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFormValue, clearForm, addWarning } from 'slices/warningsSlice'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

import {
  Container,
  StyledForm,
  InputWrapper,
  StyledButton,
} from './Warn.styles'

const Warn = () => {
  const warnings = useSelector((state) => state.warnings.value)
  const dispatch = useDispatch()

  const handleSubmitInWarn = (e) => {
    e.preventDefault()
    dispatch(addWarning())
    dispatch(clearForm())
    ;(async () => {
      await addDoc(collection(db, 'warnings'), {
        title: warnings.formValues.title,
        message: warnings.formValues.message,
      })
    })()
  }

  const handleChangeInWarn = ({ target }) => {
    dispatch(changeFormValue({ id: target.id, value: target.value }))
  }

  return (
    <Container>
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
    </Container>
  )
}

export default Warn
