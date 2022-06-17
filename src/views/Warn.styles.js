import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  //justify-content: center;
  grid-template-columns: repeat(10, 1fr);
`

export const StyledForm = styled.form`
  grid-column: 2 / 6;
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputWrapper = styled.div`
  width: 100%;
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
    color: ${({ theme }) => theme.colors.white};
  }

  .input:focus ~ .label,
  .input:not(:placeholder-shown).input:not(:focus) ~ .label {
    top: -15px;
    left: 0;
    font-size: 14px;
  }
`

export const StyledButton = styled.button`
  margin-top: 35px;
  font-size: ${({ theme }) => theme.fontSize.s};
  display: flex;
  align-self: start;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: padding-right 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.gray};

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray};
  }

  :hover {
    padding-right: calc(100% - 52.875px);
    color: ${({ theme }) => theme.colors.white};

    ::before {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
