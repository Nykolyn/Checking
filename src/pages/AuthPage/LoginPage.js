import React from 'react';
import { connect } from 'react-redux';

import ReactRouterPropTypes from 'react-router-prop-types';
import LogIn from '../../components/Authentification/LogInForm/LogIn';

import authRedirect from '../../components/Authentification/AuthRedirect';

const LoginPage = ({ history }) => <LogIn history={history} />;

LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default connect(
  null,
  null,
)(authRedirect(LoginPage));
