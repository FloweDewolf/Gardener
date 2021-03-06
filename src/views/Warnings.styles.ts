import styled from 'styled-components'
import { Button } from '../components/small/Button'

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  grid-template-rows: repeat(20, 50px);

  animation: entry 0.3s ease-in-out;

  @keyframes entry {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

export const WarningsWrapper = styled.div`
  min-height: 100px;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  grid-column: 3 / 13;
  grid-row: 3 / 14;
  border-radius: 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.black};

  h3 {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    text-align: center;
    line-height: 200%;
  }
`

export const StyledUl = styled.ul`
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s ease-in;

    button {
      font-size: 25px;
      margin-right: 25px;
      border: none;
      background-color: ${({ theme: { colors } }) => colors.white};
      cursor: pointer;
      animation: slideInLeft 0.5s cubic-bezier(1, 0, 0.45, 1.92);

      @keyframes slideInLeft {
        from {
          transform: translateX(200px);
        }
        to {
          transform: translateX(0);
        }
      }
    }
  }
`

export const SingleWarning = styled.div`
  overflow-x: hidden;
  padding: 10px;

  h2 {
    cursor: pointer;
  }

  h2,
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const StyledButton = styled(Button)`
  margin: 20px auto;
  grid-column: 3 / 13;
  grid-row: 14;
  display: block;
  border-radius: 25px;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.black};
`
