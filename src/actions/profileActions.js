import AuthApi from '../api/mockAuthApi';
import * as types from '../actions/actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import {browserHistory, Link} from 'react-router';

export function updateUserPasswordSuccess(user) {
  return { type: types.PASSWORD_UPDATE_SUCCESS, user };
}

export function updateUserPasswordFail(error) {
    return { type: types.PASSWORD_UPDATE_FAIL, error };
  }

export function usernameChanged(username) {
    return { type: types.USERNAME_CHANGED, username };
  }

export function passwordChanged(password) {
    return { type: types.PASSWORD_CHANGED, password };
}

export function n_passwordChanged(n_password) {
  return { type: types.N_PWORD_CHANGED, n_password };
}

export function c_passwordChanged(c_password) {
  return { type: types.C_PWORD_CHANGED, c_password };
}

export function changePassword(user) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return AuthApi.changePasswordApi(user).then(existingUser => {
            if (existingUser.loggedIn === true) {
              dispatch(updateUserPasswordSuccess(user));
            }
          }).catch(error => {
            dispatch(ajaxCallError(error));
            dispatch(updateUserPasswordFail(error));
            throw(error);
          }); 

    };
}
