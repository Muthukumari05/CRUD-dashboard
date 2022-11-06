import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/Ipost";
import {
  addForms,
  editForms,
  deleteForms
} from "../../actions/formActions";
import { formTypes } from "../../Actiontypes/formTypes";
import apiCalls from '../../../api-call-methods';




function* addUserApiCall({type,payload}:{
  type: typeof formTypes.ADD_FORMS,
  payload: object
}) {

  axios.post<IPost>("https://jsonplaceholder.typicode.com/posts",payload)

}

function* editUserApiCall({type,payload}:{
  type: typeof formTypes.EDIT_FORMS,
  payload: object
}){
  axios.put<IPost>("https://jsonplaceholder.typicode.com/posts",payload)
}

function* deleteUserApiCall({type,payload}:{
  type: typeof formTypes.DELETE_FORMS,
  payload: object
}){
  axios.delete<IPost>("https://jsonplaceholder.typicode.com/posts",payload);
}

function* postsSaga() {
  yield all([takeLatest(formTypes.ADD_FORMS, addUserApiCall)]);
  yield all([takeLatest(formTypes.EDIT_FORMS, editUserApiCall)]);
  yield all([takeLatest(formTypes.DELETE_FORMS, deleteUserApiCall)]);
}

export default postsSaga;
