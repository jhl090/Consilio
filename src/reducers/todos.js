import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todos;

    case types.CREATE_TODO_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.todo)
      ];

    case types.DELETE_TODO_SUCCESS:
    return state.filter(todo => todo.id !== action.todoId);

    default:
      return state;
  }
}
