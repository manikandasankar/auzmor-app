import envConfig from 'envConfig'; //eslint-disable-line

const { baseUrl } = envConfig;

/** @description calls a native fetch method and returns a promise Object
 * @param {string} url
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const fetchURL = (url, urlPrefix = baseUrl) => fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    headers: {
      Accept: 'application/json; charset=UTF-8',
    },
  }),
);

/** @description Sending a GET request to JSON API.
 * doGet method resolves or rejects the promise that is obtained
 * from the fetchURl method
 * @param {string} url
 * @param {string} urlPrefix
 * @returns {object}
 */
export const doGet = (url, urlPrefix = baseUrl) => {
  const fetchData = fetchURL(url, urlPrefix).then((res) => {
    let response = null;
    if (res.ok) {
      response = res.json();
    } else if (!res.ok) {
      response = Promise.reject(res.statusText);
    }
    return response;
  });
  return fetchData;
};
