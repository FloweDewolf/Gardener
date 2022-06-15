import React from 'react'
import { GlobalStyle } from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Providers
