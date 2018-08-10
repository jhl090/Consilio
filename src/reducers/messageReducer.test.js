import expect from 'expect';
import messageReducer from './message';
import * as actions from '../actions/message';

describe('Message Reducer', () => {
    it('should LOAD_MESSAGES_SUCCESS without problems', () => {
      // arrange
      const initialState = [
        "MESSAGE 1",
        "MESSAGE 2"
      ];
      
      const action = actions.loadMessages();
  
      //act
      const newState = messageReducer(initialState, action);
  
      //assert
      expect(newState.length).toEqual(2);
    });

    it('should SEND_MESSAGE_SUCCESS without problems', () => {
        // arrange
        const initialState = [
          "MESSAGE 1",
          "MESSAGE 2"
        ];
        
        const action = actions.sendMessage("MESSAGE 3");
    
        //act
        const newState = messageReducer(initialState, action);
    
        //assert
        //expect(newState.length).toEqual(3);
    });
});