import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 700px;
  align-items: start;
  padding: 25px;
  margin: 100px 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 25px;
  font-size: 25px;
  animation: entry 0.3s ease-in-out;

  img {
    position: absolute;
    right: 0;
  }

  @keyframes entry {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

export const SearchWrapper = styled.div`
  overflow-x: hidden;
  z-index: 2;
  position: relative;
  display: flex;

  h2 {
    font-size: 35px;
  }

  div {
    overflow: hidden;
    margin-left: 10px;

    input {
      width: 250px;
      border: none;
      background-color: transparent;
      font-size: 35px;
      outline: none;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 35px;
      transform: rotate(0deg);
      transition: transform 0.3s;

      :hover {
        transform: rotate(90deg);
      }
    }

    ::before {
      position: absolute;
      bottom: 2px;
      z-index: 1;
      content: '';
      height: 2px;
      width: 250px;
      background-color: black;
    }
  }
`
