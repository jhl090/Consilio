import AuthApi from '../api/mockAuthApi';
import * as types from '../actions/actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import {browserHistory, Link} from 'react-router';

export function usernameChanged(username) {
  return { type: types.USERNAME_CHANGED, username };
}

export function passwordChanged(password) {
  return { type: types.PASSWORD_CHANGED, password };
}

export function loginUserSuccess(loggedIn) {
  return { type: types.LOGIN_USER_SUCCESS, loggedIn };
}

export function registerUserSuccess(success) {
  browserHistory.push('/forum');
  return { type: types.REGISTER_SUCCESS, success };
}

export function logoutUserSuccess(loggedIn) {
  return { type: types.LOGOUT_USER_SUCCESS, loggedIn };
}

export function registerUserFail(error) {
  return { type: types.REGISTER_FAIL, error };
}

export function loginUserFail(error) {
  return { type: types.LOGIN_USER_FAIL, error };
}

export function n_usernameChanged(n_username) {
  return { type: types.N_UNAME_CHANGED, n_username };
}

export function n_passwordChanged(n_password) {
  return { type: types.N_PWORD_CHANGED, n_password };
}

export function c_passwordChanged(c_password) {
  return { type: types.C_PWORD_CHANGED, c_password };
}

export function loginUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthApi.loginUserApi(user).then(existingUser => {
      if (existingUser.loggedIn === true) {
        console.log(`${existingUser.username} now logged in.`);
        dispatch(loginUserSuccess(true));
      } 
    }).catch(error => {
      dispatch(ajaxCallError(error));
      dispatch(loginUserFail(error));
      throw(error);
    });
  };
}

export function logoutUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthApi.logoutUserApi(user).then(existingUser => {
      console.log(`${existingUser.username} now logged out.`);
      dispatch(logoutUserSuccess(false));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function registerUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return AuthApi.registerUserApi(user).then(existingUser => {
      if (existingUser.loggedIn === true) {
        console.log(`${existingUser.n_username} registered.`);
        dispatch(registerUserSuccess(true));
      } 
    }).catch(error => {
      dispatch(ajaxCallError(error));
      dispatch(registerUserFail(error));
      throw(error);
    });
  };
}