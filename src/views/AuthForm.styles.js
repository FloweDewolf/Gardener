import styled from 'styled-components'
import { Button } from 'components/small/Button'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const StyledH1 = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: center;
  text-shadow: 10px 4px 1px rgba(10, 46, 54, 0.5);
  color: ${({ theme }) => theme.colors.white};
`

export const StyledFormWrapper = styled.div`
  height: 600px;
  width: 600px;
  border-radius: 100px 40px;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};

  a {
    display: block;
    margin-top: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    :hover {
      color: ${({ theme: { colors } }) => colors.green};
    }
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  input {
    width: 400px;
    padding: 5px;
    font-size: ${({ theme }) => theme.fontSize.s};
    border-radius: 10px;
    border: none;
    color: black;

    :focus {
      outline: none;
    }
  }
`

export const StyledButton = styled(Button)`
  margin-top: 40px;
`
