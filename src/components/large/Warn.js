import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeFormValues, clearForm, addWarning } from 'reducers/warningsSlice'

const StyledForm = styled.form`
  margin-top: 150px;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputWrapper = styled.div`
  width: 50%;
  position: relative;

  :first-child {
    margin-bottom: 50px;
  }

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    color: ${({ theme }) => theme.colors.gray};
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    font-size: ${({ theme }) => theme.fontSize.xs};
    user-select: none;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    background-color: transparent;
    outline: none;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  .input:focus ~ .label,
  .input:not(:placeholder-shown).input:not(:focus) ~ .label {
    top: -15px;
    left: 0;
    font-size: 14px;
  }
`

const StyledButton = styled.button`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  justify-content: center;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: width 2s linear;
  color: ${({ theme }) => theme.colors.gray};

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray};
    transition: width 0.2s ease-in-out;
  }

  :hover {
    ::before {
      width: 100px;
      color: ${({ theme }) => theme.colors.white};
    }
    color: ${({ theme }) => theme.colors.white};
  }
`

const Warn = () => {
  const warnings = useSelector((state) => state.warnings.value)
  const dispatch = useDispatch()

  const handleSubmitInWarn = (e) => {
    e.preventDefault()
    dispatch(addWarning(e.target.value))
    dispatch(clearForm())
  }

  const handleChangeInWarn = ({ target }) => {
    dispatch(changeFormValues({ id: target.id, value: target.value }))
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
