import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddlware from 'redux-saga'
import { rootWatcher } from 'src/saga'
import { reducers } from './reducers'

const sagaMiddlware = createSagaMiddlware()

type State = {}

const getInitialState = (): State => ({})

export const initStore = () => {
  const history = null
  const initialState = getInitialState()
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(sagaMiddlware)))
  sagaMiddlware.run(rootWatcher)

  return { history, store }
}
