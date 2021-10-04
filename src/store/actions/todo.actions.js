import { createAction } from 'redux-actions';

// 获取 todos 列表
export const load_todo = createAction('load_todo');
export const load_todo_success = createAction('load_todo_success');

// 新增 todos 列表
export const add_todo = createAction('add_todo');
export const add_todo_success = createAction('add_todo_success');


