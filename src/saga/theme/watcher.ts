import { theme } from '@store/reducers/theme/actions'
import { putTheme } from '@theme'
import { put, takeEvery } from 'redux-saga/effects'
import { Actions, ActionSet } from './actions'

function* setWorker(action: ActionSet) {
  yield put(theme(action.payload))
  putTheme(action.payload)
}

export function* watcher() {
  yield takeEvery(Actions.SET, setWorker)
}
