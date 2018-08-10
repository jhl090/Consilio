import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case types.USERNAME_CHANGED:
      return Object.assign({}, state, { username: action.username });
      
    case types.PASSWORD_CHANGED:
      return Object.assign({}, state, {password: action.password });

    case types.LOGIN_USER:
      return Object.assign({}, state, { loading: true });

    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, { loading: false, loggedIn: true });

    case types.LOGIN_USER_FAIL:
      return Object.assign({}, state, { error: action.error });

    case types.LOGOUT_USER:
      return Object.assign({}, state, { loading: true });
    
    case types.LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, { 
        username: '',
        password: '',
        loading: false, 
        loggedIn: false,
        n_username: '',
        n_password: '',
        c_password: '',
        error: '' 
      });

    case types.N_UNAME_CHANGED:
      return Object.assign({}, state, { n_username: action.n_username });

    case types.N_PWORD_CHANGED:
      return Object.assign({}, state, { n_password: action.n_password });

    case types.C_PWORD_CHANGED:
      return Object.assign({}, state, { c_password: action.c_password });
   
    case types.REGISTER_USER:
      return Object.assign({}, state, { registering: true });

    case types.REGISTER_SUCCESS:
      return Object.assign({}, state, { registering: false, loggedIn: true });

    case types.REGISTER_FAIL:
      return Object.assign({}, state, { error: 'Registration Failed!' });
      
    case types.PASSWORD_UPDATE_SUCCESS:
      return Object.assign({}, state, { password: action.user.n_password });
  
    case types.PASSWORD_UPDATE_FAIL:
      return Object.assign({}, state, { error: "Password Change Failed!"});

    default:
      return state;
  }
}
