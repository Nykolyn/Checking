import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App/App';
import store from '../../redux/state';

const Root = () => (
  <Provider store={store}>
    <Router basename="/">
      <Route component={App} />
    </Router>
  </Provider>
);

export default Root;
