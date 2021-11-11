import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

export const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <Router>
      { children }
    </Router>
  </Provider>
)
