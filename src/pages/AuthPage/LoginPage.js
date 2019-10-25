import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import LogIn from '../../components/Authentification/LogInForm/LogIn';
import { isAuthentificated } from '../../redux/session/sessionSelectors';
import authRedirect from '../../components/Authentification/AuthRedirect';

const LoginPage = ({ history, authentificated }) => (
  <LogIn history={history} authentificated={authentificated} />
);

LoginPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  authentificated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  authentificated: isAuthentificated(state),
});

export default connect(
  mapStateToProps,
  null,
)(authRedirect(LoginPage));
