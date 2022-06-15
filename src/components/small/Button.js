import styled from 'styled-components'

export const Button = styled.button`
  font-size: 20px;
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 150px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.dark};
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  cursor: pointer;

  :hover {
    background-color: ${({ theme: { colors } }) => colors.green};
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : props.theme.colors.dark};
  }
`
