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
  animation: move 10s linear infinite;
  transform-origin: 50% 50%;

  @keyframes move {
    from {
      transform: scale(2.3) rotate(0deg);
    }

    to {
      transform: scale(2.3) rotate(360deg);
    }
  }
`
