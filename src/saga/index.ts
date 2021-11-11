import { all } from 'redux-saga/effects'
import { watcher as userWatcher } from './user/watchers'
import { watcher as authWatcher } from './auth/watchers'
import { watcher as mainWatcher } from './main/watcher'
import { watcher as themeWatcher } from './theme/watcher'

export function* rootWatcher() {
  yield all([authWatcher(), userWatcher(), mainWatcher(), themeWatcher()])
}
