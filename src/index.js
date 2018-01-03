import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './containers/root/Root';
import configureStore from './store/configureStore';


const store = configureStore(); // store that holds the complete state of app.

/*
* It renders a React element into a root DOM node
*/
ReactDOM.render(
  <Root history={browserHistory} store={store} />,
  document.getElementById('root'));
