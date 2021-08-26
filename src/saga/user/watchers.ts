import { user } from '@store/reducers/user/actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import {
  ResAvatar, ResProfile, DataUser, ResUser, Methods
} from '@apiYa/user/types'
import { err } from '@store/reducers/err/actions'
import { condition } from '@store/reducers/main/actions'
import { exe } from '@apiYa/user/methods'
import {
  Actions, ActionAvatar, ActionProfile, ActionPassword
} from './actions'

function* asyncWorker<R extends ResUser>(method: Methods, data?: DataUser): Generator<any, R, any> {
  yield put(condition('REQUEST', method))
  const res: R = yield call(() => exe(method, data))
  if (res.status === 200) {
    yield put(condition('SUCCESS', method))
  } else {
    yield put(condition('ERROR', method))
    yield put(err({
      status: res.status,
      message: res.data.reason || 'Something went wrong'
    }))
  }
  return res
}

function* avatarWorker(action: ActionAvatar) {
  const res: ResAvatar = yield asyncWorker('putAvatar', { file: action.payload })
  if (res.status === 200) yield put(user(res.data))
}

function* profileWorker(action: ActionProfile) {
  const res: ResProfile = yield asyncWorker('putProfile', action.payload)
  if (res.status === 200) yield put(user(res.data))
}

function* passordWorker(action: ActionPassword) {
  yield asyncWorker('putPassword', action.payload)
}

export function* watcher() {
  yield takeEvery(Actions.AVATAR, avatarWorker)
  yield takeEvery(Actions.PROFILE, profileWorker)
  yield takeEvery(Actions.PASSWORD, passordWorker)
}
