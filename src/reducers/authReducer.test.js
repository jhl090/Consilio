import expect from 'expect';
import authReducer from './auth';
import * as actions from '../actions/auth';

describe('Authentication Reducer', () => {
    it('should LOGIN_USER_SUCCESS without problems', () => {
      // arrange
      const initialState = [];

      const action = actions.loginUser("jlee");
  
      //act
      const newState = authReducer(initialState, action);
  
      //assert
      expect(newState).toEqual([]);
    });

    it('should LOGIN_USER_SUCCESS without problems', () => {
      // arrange
      const initialState = [];
  
      const action = actions.logoutUser("jlee");
    
      //act
      const newState = authReducer(initialState, action);
    
      //assert
      expect(newState).toEqual([]);
    });

    it('should LOGIN_USER_SUCCESS without problems', () => {
        // arrange
        const initialState = [];
    
        const action = actions.registerUser("jlee1");
      
        //act
        const newState = authReducer(initialState, action);
      
        //assert
        expect(newState).toEqual([]);
      });
});