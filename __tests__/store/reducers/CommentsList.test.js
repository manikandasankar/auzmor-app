import React from 'react';
import commentsList from '../../../src/store/reducers/CommentsList';

const initialState = {
  commentsList: [],
  error: '',
};

describe('CommentsList reducers', () => {

  it('should call COMMENTS_LIST_FETCH_SUCCESS', () => {
    const response = {
      commentsList: [],
    };
    const action = {
      type: 'COMMENTS_LIST_FETCH_SUCCESS',
      payload: response,
    };
    
    const expected = {
      ...initialState,
      commentsList: [],
    };
    expect(commentsList(undefined, action)).toEqual(expected);
  });
  
  it('should call COMMENTS_LIST_FETCH_ERROR', () => {
    const action = {
      type: 'COMMENTS_LIST_FETCH_ERROR',
      payload: {}
    };
    const expected = {
      ...initialState,
	    error: {}
    };
    expect(commentsList(undefined, action)).toEqual(expected);
  });

  it('should call default', () => {
    const action = {
      type: undefined,
      payload: {}
    };
    const expected = {
      ...initialState,
    };
    expect(commentsList(undefined, action)).toEqual(expected);
  });
});
