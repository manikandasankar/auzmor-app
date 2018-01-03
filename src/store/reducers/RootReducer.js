import { combineReducers } from 'redux';

import comments from './CommentsList';

/*
 * It combines the different reducer functions into one.
 */
export default combineReducers({
  comments,
});
