import forumApi from '../api/mockForumApi';
import * as types from '../actions/actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts};
}

export function createPostSuccess(post) {
  console.log(post);
  return {type: types.CREATE_POST_SUCCESS, post};
}

export function loadPosts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return forumApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createPost(post) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return forumApi.savePost(post).then(post => {
        dispatch(createPostSuccess(post));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}