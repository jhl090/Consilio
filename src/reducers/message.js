import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messageReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return action.messages;

    case types.SEND_MESSAGE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.message)
      ];

    default:
      return state;
  }
}
