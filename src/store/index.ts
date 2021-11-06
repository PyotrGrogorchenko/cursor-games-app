import { applyMiddleware, createStore, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddlware from 'redux-saga'
import { rootWatcher } from 'src/saga'
import { enhancer as storyRedux } from 'addon-redux'
import { reducers } from './reducers'

const sagaMiddlware = createSagaMiddlware()

type State = {}
const getInitialState = (): State => ({})

const getMiddleware = () => {
  const middleware = []
  middleware.push(sagaMiddlware)
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const getEnhancer = () => {
  const enhancers = []
  if (process.env.NODE_ENV !== 'production') {
    enhancers.push(storyRedux)
  }
  return enhancers
}

export const initStore = () => {
  const store = createStore(reducers, getInitialState(), compose(...[getMiddleware(), ...getEnhancer()]))
  sagaMiddlware.run(rootWatcher)

  return { store }
}
