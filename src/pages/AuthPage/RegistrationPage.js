import React from 'react';
import { connect } from 'react-redux';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import Registration from '../../components/Authentification/Registration/Registration';
import authRedirect from '../../components/Authentification/AuthRedirect';
import { isAuthentificated } from '../../redux/session/sessionSelectors';

const RegistrationPage = ({ authentificated, history }) => (
  <Registration history={history} authentificated={authentificated} />
);

RegistrationPage.propTypes = {
  authentificated: PropTypes.bool.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

const mapStateToProps = state => ({
  authentificated: isAuthentificated(state),
});

export default connect(
  mapStateToProps,
  null,
)(authRedirect(RegistrationPage));
