import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;
  }

  *::after, *::before {
    box-sizing: inherit;
  }


`
