import { doGet } from '../utils/fetchWrapper';
import envConfig from 'envConfig'; //eslint-disable-line

/** @description It fetches localization json.
 * @param {string} language - containes language code
 * @return {Promise}
 */
export const fetchCommentsList = (type) => {
  let URL = envConfig.apiEndPoints.commentsList;
  URL = window.location.pathname + URL.replace('<selectedType>', type);
  return doGet(URL);
};
