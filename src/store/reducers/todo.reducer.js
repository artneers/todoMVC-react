import { handleActions as createReducer } from 'redux-actions';
import { modify_todo_name_success, modify_todo_edit_success, clear_todo_completed_success, load_todo_success, add_todo_success, remove_todo_success, modify_todo_success, modify_todo_filter } from '../actions/todo.actions'
import { fromJS, getIn, setIn, mergeDeep, removeIn, updateIn } from 'immutable'

const initialState = fromJS({
  todos: [],
  filter: 'all'
})
export default createReducer({
  [load_todo_success]: (state, action) => {
    return setIn(state, ['todos'], action.payload)
  },
  [add_todo_success]: (state, action) => {
    return mergeDeep(state, {todos: [action.payload]})
  },
  [remove_todo_success]: (state, action) => {
    let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload)
    return removeIn(state, ['todos', index])
  },
  [modify_todo_success]: (state, action) => {
    let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
    return updateIn(state, ['todos', index], () => action.payload)
  },
  [modify_todo_filter]: (state, action) => {
    return setIn(state, ['filter'], action.payload)
  },
  [clear_todo_completed_success]: (state, action) => {
    let todos = getIn(state, ['todos']).filter(todo => !todo.isCompleted)
    return setIn(state, ['todos'], todos)
  },
  [modify_todo_edit_success]: (state, action) => {
    let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
    return updateIn(state, ['todos', index], () => action.payload)
  },
  [modify_todo_name_success]: (state, action) => {
    let index = getIn(state, ['todos']).findIndex(todo => todo.id === action.payload.id)
    return updateIn(state, ['todos', index], () => action.payload)
  }
}, initialState)