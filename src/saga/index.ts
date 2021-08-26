import { all } from 'redux-saga/effects'
import { watcher as userWatcher } from './user/watchers'
import { watcher as authWatcher } from './auth/watchers'
import { watcher as mainWatcher } from './main/watcher'

export function* rootWatcher() {
  yield all([authWatcher(), userWatcher(), mainWatcher()])
}
