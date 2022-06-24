import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import Providers from './Providers'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Providers>
      <Root />
    </Providers>
  </React.StrictMode>
)
