import React from 'react'
import PropTypes from 'prop-types'

import { GlobalStyle } from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

const Providers = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers
