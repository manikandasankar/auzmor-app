import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';


const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
};

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;
