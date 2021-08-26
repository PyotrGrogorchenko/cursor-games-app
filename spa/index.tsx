import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../src/components/ErrorBoundary'
import { App } from '../src/components/App'
import { initStore } from '../src/store'
import '@babel/polyfill'

const { store } = initStore()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
