import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCommentsList } from '../../../src/store/actions/CommentsList';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);

const response = {}

describe('Actions for CommentsList', () => {
       
  it('should call getCommentsList success', () => {
    fetch.mockResponseOnce(JSON.stringify(response))
    const expectedActions = [{ 
      type: 'COMMENTS_LIST_FETCH_SUCCESS',
      payload: response,
    }];
	  const store = mockStore();
    return store.dispatch(getCommentsList(response)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
  it('should call getCommentsList error', () => {
	  const error = 'internal server error';
    fetch.mockResponseOnce(JSON.stringify(error), {status: 404})
	
    const errorActions = [{ 
      type: 'COMMENTS_LIST_FETCH_ERROR', 
      payload: error 
    }];
    const store = mockStore();
    return store.dispatch(getCommentsList(error)).catch((error) => {
	    expect(store.getActions()).toEqual(errorActions);
	  });
  });
});
