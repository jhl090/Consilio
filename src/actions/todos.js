import todoApi from '../api/mockTodoApi';
import * as types from '../actions/actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos};
}

export function createTodoSuccess(todo) {
  return {type: types.CREATE_TODO_SUCCESS, todo};
}

export function deleteTodoSuccess(todoId) {
  return {type: types.DELETE_TODO_SUCCESS, todoId};
}

export function loadTodos() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return todoApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createTodo(todo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return todoApi.createTodo(todo).then(todo => {
        dispatch(createTodoSuccess(todo));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function removeTodo(todoId) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return todoApi.removeTodo(todoId).then(todoId => {
        dispatch(deleteTodoSuccess(todoId));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}