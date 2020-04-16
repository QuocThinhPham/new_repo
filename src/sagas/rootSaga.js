import { takeLatest, call, put } from 'redux-saga/effects';
import * as taskConstants from './../constants/tasks';
import { fetchTasksSuccess, fetchTasksFailed } from './../actions/tasks';
import { getListTask } from '../apis/tasks';

function* fetchListTask() {
   try {
      const resp = yield call(getListTask);
      const { data } = resp;
      yield put(fetchTasksSuccess(data));
   } catch (err) {
      yield put(fetchTasksFailed(err));
   }
}

function* rootSaga() {
   yield takeLatest(taskConstants.FETCH_TASKS, fetchListTask);
}

export default rootSaga;
