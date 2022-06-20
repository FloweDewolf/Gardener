import styled from 'styled-components'
import Wrapper from 'components/small/Wrapper'

export const HelloWrapper = styled(Wrapper)`
  position: relative;
  height: 300px;
  margin: 100px 50px 0;
  font-size: 25px;
  animation: entry 0.3s ease-in-out;

  p {
    text-decoration: underline;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;

  a {
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;

    :nth-of-type(1) {
      margin-top: 20px;
    }

    :hover {
      text-decoration: underline;
    }
  }
`

export const LastWarning = styled.div`
  display: flex;
  position: relative;
  width: 600px;
  height: 300px;
  margin: 50px;
  padding: 25px;
  flex-direction: column;
  border-radius: 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  font-size: 25px;
  animation: entry 0.3s ease-in-out;

  div {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    padding: 25px;
    margin-bottom: 50px;
    text-decoration: underline;
    cursor: pointer;

    :hover {
      color: gray;
    }
  }

  span {
    position: absolute;
    font-size: 75px;
  }

  span:first-child {
    top: 0;
    right: 25px;
  }

  span:last-child {
    bottom: 0;
    left: 25px;
  }
`
