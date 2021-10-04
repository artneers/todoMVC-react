import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { add_todo, add_todo_success, load_todo, load_todo_success } from '../actions/todo.actions';

function* load_todo_data() {
  let todoData = yield axios.get('http://localhost:3005/api/todos').then(res => res.data)
  yield put(load_todo_success(todoData))
}

function* add_todo_data(action) {
  let taskInfo = yield axios.post('http://localhost:3005/api/todos', {taskName: action.payload}).then(res=>res.data)
  yield put(add_todo_success(taskInfo.task))
}

export default function* todoSaga() {
  yield takeEvery(load_todo, load_todo_data)
  yield takeEvery(add_todo, add_todo_data)
}