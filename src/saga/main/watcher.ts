import { condition } from '@store/reducers/main/actions'
import { put, takeEvery } from 'redux-saga/effects'
import { Actions } from './actions'

function* resetWorker() {
  yield put(condition())
}

export function* watcher() {
  yield takeEvery(Actions.RESET, resetWorker)
}
