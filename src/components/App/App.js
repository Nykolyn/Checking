import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { refreshUser } from '../../redux/session/sessionOperations';
import Loader from '../Dashboard/Loader/Loader';

const AsyncDashboard = Loadable({
  loader: () =>
    import(
      '../../pages/DashboardPage/DashboardPage' /* webpackChunkName: "dashboard-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncLogin = Loadable({
  loader: () =>
    import(
      '../../pages/AuthPage/LoginPage' /* webpackChunkName: "login-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncRegistration = Loadable({
  loader: () =>
    import(
      '../../pages/AuthPage/RegistrationPage' /* webpackChunkName: "registration-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncStatistics = Loadable({
  loader: () =>
    import(
      '../../pages/StatisticsPage/StatisticsPage' /* webpackChunkName: "statistics-page" */
    ),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

class App extends Component {
  static propTypes = {
    refreshUserData: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { refreshUserData } = this.props;
    refreshUserData();
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={AsyncLogin} />
        <Route path="/registration" component={AsyncRegistration} />
        <Route path="/dashboard" component={AsyncDashboard} />
        <Route path="/statistics" component={AsyncStatistics} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
}

const mDTP = {
  refreshUserData: refreshUser,
};

export default connect(
  null,
  mDTP,
)(App);
