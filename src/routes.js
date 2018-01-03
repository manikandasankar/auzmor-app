import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import RootContainer from './containers/RootContainer';
import HomeContainer from './containers/HomeContainer';

export default (
  <Router>
    <Route component={RootContainer} path="/">
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);
