import { fetchCommentsList } from '../../api/CommentsListApi';

/**
 * @description It fetches comments list from json.
 * - dispatch the "COMMENTS_LIST_FETCH_SUCCESS" for updating the store.
 * @param {string} selectedType - selected comments type
 * @return {Promise}
 */
export function getCommentsList(selectedType) {
  return dispatch => fetchCommentsList(selectedType)
   .then((response) => {
     dispatch({
       type: 'COMMENTS_LIST_FETCH_SUCCESS',
       payload: response,
     });
   }).catch((error) => {
     dispatch({
       type: 'COMMENTS_LIST_FETCH_ERROR',
       payload: error,
     });
   });
}
