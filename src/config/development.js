import baseConfig from './baseConfig';

const development = {
  baseUrl: baseConfig.apiBaseUrl[env || dev], //eslint-disable-line
};

export default {
  ...baseConfig,
  ...development,
};
