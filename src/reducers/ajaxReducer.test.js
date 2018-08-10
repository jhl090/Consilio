import expect from 'expect';
import ajaxStatusReducer from './ajaxStatusReducer';
import * as actions from '../actions/ajaxStatusActions';

describe('Ajax Status Reducer', () => {
    it('should return from BEGIN_AJAX_CALL without problems', () => {
      const initialState = [];
         
      // arrange 
      const action = actions.beginAjaxCall();
      
      //act
      const newState = ajaxStatusReducer(initialState, action);
      expect(newState).toEqual('1');
    });

    it('should return from AJAX_CALL_ERROR without problems', () => {
        const initialState = [];
           
        // arrange 
        const action = actions.ajaxCallError();
        
        //act
        let newState = ajaxStatusReducer(initialState, action);
        expect(newState).toEqual(-1);
    });
  });