import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFormValue, clearForm } from 'slices/warningsSlice'

import { toast } from 'react-toastify'

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
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
    dispatch(clearForm())
    ;(async () => {
      const colRef = collection(db, 'warnings')
      await addDoc(colRef, {
        title: warnings.formValues.title,
        message: warnings.formValues.message,
        createdAt: serverTimestamp(),
      })
    })()

    toast.success('Warning was added', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
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
