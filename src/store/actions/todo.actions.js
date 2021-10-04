import { createAction } from 'redux-actions';

// 获取 todos 列表
export const load_todo = createAction('load_todo');
export const load_todo_success = createAction('load_todo_success');

// 新增 todos 列表
export const add_todo = createAction('add_todo');
export const add_todo_success = createAction('add_todo_success');

// 删除 todos 列表
export const remove_todo = createAction('remove_todo');
export const remove_todo_success = createAction('remove_todo_success');

// 更新 todos 列表状态
export const modify_todo = createAction('modify_todo');
export const modify_todo_success = createAction('modify_todo_success');

// 筛选
export const modify_todo_filter = createAction('modify_todo_filter');

// 清除已完成任务
export const clear_todo_completed = createAction('clear_todo_completed');
export const clear_todo_completed_success = createAction('clear_todo_completed_success');

// 任务名称修改
export const modify_todo_edit = createAction('modify_todo_edit');
export const modify_todo_edit_success = createAction('modify_todo_edit_success');

// 任务名称确认
export const modify_todo_name = createAction('modify_todo_name');
export const modify_todo_name_success = createAction('modify_todo_name_success');
