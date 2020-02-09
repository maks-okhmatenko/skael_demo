import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as ProjectsAPI from '../../../services/ProjectsAPI';
import * as Actions from './actions';
import { GET_PROJECTS_LIST } from './constants';

function* getProjectsSaga() {
  try {
    const projects = yield call(ProjectsAPI.getProjectsList);
    yield put(Actions.getProjectsListSuccess(projects));
  } catch (err) {
    yield put(Actions.getProjectsListError(err));
  }
}

function* actionWatcher() {
  yield takeLatest(GET_PROJECTS_LIST, getProjectsSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
