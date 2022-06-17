import React from 'react'
import PropTypes from 'prop-types'

import { GlobalStyle } from 'styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

import { BrowserRouter } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import store from './store'

const Providers = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: '#0a2e36', color: 'whitesmoke' }}
      />
    </BrowserRouter>
  </Provider>
)

Providers.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Providers
