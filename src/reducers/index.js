import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import auth from './auth';
import forum from './forum';
import messages from './message';
import todos from './todos';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  auth,
  courses,
  authors,
  forum,
  messages,
  todos,
  ajaxCallsInProgress
});

export default rootReducer;
