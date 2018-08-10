import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function forumReducer(state = initialState.forum, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    
    case types.CREATE_POST_SUCCESS:
      console.log(action.post);
      return [
        ...state,
        Object.assign({}, action.post)
      ];

    default:
      return state;
  }
}