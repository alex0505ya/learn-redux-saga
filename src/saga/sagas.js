import { put, takeEvery, all, delay, call } from 'redux-saga/effects'

// eslint-disable-next-line require-yield
export function* helloSaga() {
  console.log('Hello Sagas!')
}


// 我們工作的 Saga：將執行非同步的 increment task
export function* incrementAsync() {
  yield call(delay,1000)
  yield put({ type: 'INCREMENT' })
}

// 我們觀察的 Saga：在每個 INCREMENT_ASYNC 產生一個新的 incrementAsync task
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
