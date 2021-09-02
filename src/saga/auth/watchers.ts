import { user } from '@store/reducers/user/actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import {
  ResUserGet, ResSignup, ResSignin, ResLogout, DataAuth, ResAuth, Methods
} from '@apiYa/auth/types'
import { err } from '@store/reducers/err/actions'
import { condition } from '@store/reducers/main/actions'
import { exe } from '@apiYa/auth/methods'
import {
  Actions, ActionSignin, ActionSignup
} from './actions'

function* asyncWorker<R extends ResAuth>(method: Methods, data?: DataAuth): Generator<any, R, any> {
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

function* userWorker() {
  yield put(condition('REQUEST', 'getUser'))
  const res: ResUserGet = yield call(() => exe('getUser'))
  yield put(user(res.status === 200 ? res.data : undefined))
  yield put(condition('SUCCESS', 'getUser'))
}

function* signupWorker(action: ActionSignup) {
  const res: ResSignup = yield asyncWorker('postSignup', action.payload)
  if (res.status === 200) yield userWorker()
}

function* signinWorker(action: ActionSignin) {
  const res: ResSignin = yield asyncWorker('postSignin', action.payload)
  console.log('res', res)
  if (res.status === 200) yield userWorker()
}

function* logoutWorker() {
  const res: ResLogout = yield asyncWorker('postLogout')
  if (res.status === 200) yield put(user())
}

export function* watcher() {
  yield takeEvery(Actions.SIGNUP, signupWorker)
  yield takeEvery(Actions.SIGNIN, signinWorker)
  yield takeEvery(Actions.LOGOUT, logoutWorker)
  yield takeEvery(Actions.USER, userWorker)
}
