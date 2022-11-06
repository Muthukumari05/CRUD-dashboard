import { all, fork } from "redux-saga/effects";
import postsSaga from "./formSaga/formSaga";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
