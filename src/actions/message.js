import messagesApi from '../api/mockMessagesApi';
import * as types from '../actions/actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function sendMessageSuccess(message) {
  console.log(message);
  return {type: types.SEND_MESSAGE_SUCCESS, message};
}

export function loadMessages() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return messagesApi.getAllMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function sendMessage(message) {
  console.log("HERE");
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return messagesApi.sendMessage(message).then(post => {
        dispatch(sendMessageSuccess(message));
    }).catch(error => {
      console.log("ERROR");
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}