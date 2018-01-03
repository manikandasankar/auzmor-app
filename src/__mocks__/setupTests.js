/* eslint-disable import/no-extraneous-dependencies */

import 'jest-enzyme';
import jsdom from 'jsdom';
import 'isomorphic-fetch';

const DEFAULT_HTML = '<html><body></body></html>';

global.document = jsdom.jsdom(DEFAULT_HTML);
global.window = document.defaultView;
global.navigator = window.navigator;
global.fetch = require('jest-fetch-mock');
