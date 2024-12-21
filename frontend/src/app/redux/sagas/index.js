import { all } from 'redux-saga/effects';
import watchTasks from './task.saga';

export default function* rootSaga() {
  yield all([
    watchTasks(), 
  ]);
}
