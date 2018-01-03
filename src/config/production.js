import baseConfig from './baseConfig';

const production = {
  baseUrl: baseConfig.apiBaseUrl[env || dev], //eslint-disable-line
};

export default {
  ...baseConfig,
  ...production,
};
