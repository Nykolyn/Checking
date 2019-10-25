import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../Dashboard/Loader/Loader';
import Header from '../Header/Header';

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

const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/login" component={AsyncLogin} />
      <Route path="/registration" component={AsyncRegistration} />
      <Route path="/dashboard" component={AsyncDashboard} />
      <Route path="/statistics" component={AsyncStatistics} />
      <Redirect to="/dashboard" />
    </Switch>
  </>
);

export default App;
