import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { Provider } from 'react-redux'
import store from './store'

const Providers = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </Provider>
)

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers
