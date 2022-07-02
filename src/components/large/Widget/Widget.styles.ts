import styled from 'styled-components'

export const Container = styled.div`
  width: 400px;
  height: auto;
  max-height: 700px;
  position: absolute;
  right: 0;
  top: 200px;
  background-color: white;
  border: 2px solid ${({ theme: { colors } }) => colors.brown};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(400px)'};
  transition: transform 0.4s ease-in-out;
`

export const WidgetHandler = styled.button`
  width: 80px;
  height: 30px;
  position: absolute;
  top: 40px;
  left: -55px;
  transform: rotate(-90deg);
  background-color: ${({ theme: { colors } }) => colors.brown};
  color: white;
  border: none;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  h1 {
    display: flex;
    justify-content: space-between;

    span:last-child {
      margin-right: 110px;
    }
  }
`

export const MiniWeather = styled.div`
  display: flex;
  align-items: center;
`
