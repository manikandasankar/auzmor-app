
const initialState = {
  commentsList: [],
  error: '',
};

/* - Reducer for Comments List.
 * @params
 *  - state - object
 *  - action - object
 * @return
 *  - state - object
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case 'COMMENTS_LIST_FETCH_SUCCESS':
      return {
        ...state,
        commentsList: action.payload.commentsList,
      };
    case 'COMMENTS_LIST_FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default :
      return state;
  }
};
