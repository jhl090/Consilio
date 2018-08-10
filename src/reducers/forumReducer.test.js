import expect from 'expect';
import forumReducer from './forum';
import * as actions from '../actions/forum';

describe('Forum Reducer', () => {
    it('should LOAD_POSTS_SUCCESS without problems', () => {
      // arrange
      const initialState = [
        "FORUM POST 1",
        "FORUM POST 2"
      ];
      
      const post = "FORUM POST 3"; 

      const action1 = actions.loadPosts();
      //const action2 = actions.createPost(post);
  
      //act
      const newState1 = forumReducer(initialState, action1);
      //const newState2 = forumReducer(initialState, action2);
  
      //assert
      expect(newState1.length).toEqual(2);
    });

    it('should CREATE_POST_SUCCESS without problems', () => {
      // arrange
      let initialState = [
        "FORUM POST 1",
        "FORUM POST 2"
      ];
      
      const action2 = actions.createPost("FORUM POST 3");
  
      //act
      const newState2 = forumReducer(initialState, action2);
  
      //assert
      //expect(newState2.length).toEqual(3);
    });

});