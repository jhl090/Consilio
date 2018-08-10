import expect from 'expect';
import todosReducer from './todos';
import * as actions from '../actions/todos';

describe('Message Reducer', () => {
    it('should LOAD_TODOS_SUCCESS without problems', () => {
      // arrange
      const initialState = [
        "TODO 1",
        "TODO 2"
      ];
      
      const action = actions.loadTodos();
  
      //act
      const newState = todosReducer(initialState, action);
  
      //assert
      expect(newState.length).toEqual(2);
    });

    it('should CREATE_TODO_SUCCESS without problems', () => {
        // arrange
        let initialState = [
          "TODO 1",
          "TODO 2"
        ];
        const action = actions.createTodo("TODO 3");
    
        //act
        const newState = todosReducer(initialState, action);
    
        //assert
        //expect(newState.length).toEqual(3);
    });

    it('should DELETE_TODO_SUCCESS without problems', () => {
        // arrange
        let initialState = [
          "TODO 1",
          "TODO 2"
        ];
        const action = actions.removeTodo("TODO 2");
    
        //act
        const newState = todosReducer(initialState, action);
    
        //assert
        //expect(newState.length).toEqual(1);
    });

});