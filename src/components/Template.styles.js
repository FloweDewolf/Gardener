import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const BlobContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  fill: ${({ theme }) => theme.colors.dark};
  width: 50vmax;
  z-index: -2;
  animation: move 15s linear infinite;
  transform-origin: 50% 50%;

  @keyframes move {
    from {
      transform: translateY(30%) translateX(-20%) scale(3) rotate(0deg);
    }

    to {
      transform: translateY(30%) translateX(-20%) scale(3) rotate(360deg);
    }
  }
`
